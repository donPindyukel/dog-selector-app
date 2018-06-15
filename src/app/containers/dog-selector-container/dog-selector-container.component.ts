import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as breedsActions from '../../store/actions/breeds.actions';
import { Breeds } from '../../models/breeds';
import { getBreeds, isInProgress } from '../../store/reducers/breeds.reducer';
import { AutoUnsubscribe } from '../../shared/decorators/auto-unsubscribe.decorator';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-dog-selector-container',
  templateUrl: './dog-selector-container.component.html',
  styleUrls: ['./dog-selector-container.component.scss']
})
@AutoUnsubscribe()
export class DogSelectorContainerComponent implements OnInit {

  breeds$: Observable<string[]>;
  isInProgress$: Observable<boolean>;
  isSpinner = true;
  imageUrl = '';
  currentResponseStr: string[];
  isImageSpinner: boolean;

  constructor(
    public store: Store<Breeds>,
    private imageService: ImagesService,

  ) { }

  ngOnInit() {
    this.breeds$ = this.store.select(getBreeds);
    this.isInProgress$ = this.store.select(isInProgress);
    this.store.dispatch(new breedsActions.GetBreedsList());
    this.isInProgress$.subscribe((data) => {
      this.isSpinner = data;
    });
  }

  onBreedSelect(breed: string) {
    const breedStr = breed.toLowerCase();
    this.currentResponseStr = [];
    if (breedStr.split(' ').length > 1) {
      breedStr.split(' ').forEach(word => this.currentResponseStr.push(word));
    } else {
      this.currentResponseStr.push(breedStr);
    }
    this.onClickGetRandom();
  }

  onClickGetRandom() {
    this.isImageSpinner = true;
    this.imageService.getRandomImage(this.currentResponseStr)
      .subscribe(data => {
        this.isImageSpinner = false;
        this.imageUrl = data;
      });
  }

}
