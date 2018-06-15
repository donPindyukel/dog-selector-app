import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BreedsService } from '../../services/breeds.service';
import * as breeds from '../actions/breeds.actions';
import { BreedsResponse } from '../../models/breeds';


@Injectable()
export class BreedsEffects {
  constructor(
    private actions$: Actions,
    private breedsService: BreedsService
  ) {}

  @Effect() onGetBreedsList$: Observable<Action> = this.actions$.pipe(
    ofType(breeds.GET_BREEDS_LIST_PENDING),
    mergeMap(() => this.breedsService.getBreeds()),
    map((data: BreedsResponse) => new breeds.GetBreedsListSuccess(this.breedsService.breedsMapData(data))),
    catchError(error => of(new breeds.GetBreedsListFail(error)))
  );
}
