import * as breeds from '../actions/breeds.actions';
import { Breeds } from '../../models/breeds';

export interface State {
  breeds: string[];
  isInProgress: boolean;
}
export const initialState: State = {
  breeds: [],
  isInProgress: false
};

export function breedsReducer(state = initialState, action: breeds.Actions): State {
  switch (action.type) {
    case breeds.GET_BREEDS_LIST_PENDING: {
      return { ...state, isInProgress: true };
    }
    case breeds.GET_BREEDS_LIST_SUCCESS: {
      return { ...state, breeds: [...action.payload], isInProgress: false };
    }
    case breeds.GET_BREEDS_LIST_FAIL: {
      return { ...state, isInProgress: false };
    }
    default: {
      return state;
    }
  }
}

export const getBreeds = (state) => state.breedsReducer.breeds;
export const isInProgress = (state) => state.breedsReducer.isInProgress;
