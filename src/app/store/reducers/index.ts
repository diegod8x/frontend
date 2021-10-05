import { ActionReducerMap, MetaReducer, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { PersonsAction, PersonsActionTypes } from '../actions/persons.actions';
import { Person } from '../../interfaces/person';

export interface PersonState {
  personsData: Person[] | null;
  error: string | null;
  loading: boolean;
}

const initialPersonState: PersonState = {
  personsData: null,
  error: null,
  loading: false
};

export interface AppState {
  persons: PersonState;
}

export function personReducer(state: PersonState = initialPersonState, action: PersonsAction): PersonState {
  switch (action.type) {

    case PersonsActionTypes.LoadPersons:
      return {
        ...state,
        loading: true
      };

    case PersonsActionTypes.LoadPersonsSuccess:
      return {
        ...state,
        loading: false,
        personsData: action.payload.personsData,
      };

    case PersonsActionTypes.PersonError:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  persons: personReducer
};


export const selectPersons = (state: AppState) => state.persons.personsData;

export const selectLoadingPersons = (state: AppState) => state.persons.loading;

export const selectError = (state: AppState) => state.persons.error;

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];