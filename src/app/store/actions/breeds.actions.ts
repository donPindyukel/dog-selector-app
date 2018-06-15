import { Action } from '@ngrx/store';

export const GET_BREEDS_LIST_PENDING = '[BREEDS] Get breeds list pending';
export const GET_BREEDS_LIST_SUCCESS = '[BREEDS] Get breeds list success';
export const GET_BREEDS_LIST_FAIL = '[BREEDS] Get breeds list fail';

export class GetBreedsList implements Action {
  readonly type = GET_BREEDS_LIST_PENDING;
  constructor() { }
}

export class GetBreedsListSuccess implements Action {
  readonly type = GET_BREEDS_LIST_SUCCESS;
  constructor(public payload: string[] | null) { }
}

export class GetBreedsListFail implements Action {
  readonly type = GET_BREEDS_LIST_FAIL;
  constructor(public payload: any) { }
}

export type Actions
  = GetBreedsList
  | GetBreedsListSuccess
  | GetBreedsListFail;
