import { Action } from '@ngrx/store';
import { Person } from 'src/app/interfaces/person';



export enum PersonsActionTypes {
  LoadPersons = '[Persons] Load Persons',
  LoadPersonsSuccess = '[Persons] Load Persons Success',
  PersonError = '[Persons] Person Error'
}

export class PersonsAction implements Action {
  type: string;
  payload: {
    personsData: Person[],
    error: string
  };
}

export class LoadPersons implements Action {
  readonly type = PersonsActionTypes.LoadPersons;

  constructor(readonly payload: { personsData: Person[] }) {

  }
}

export class LoadPersonsSuccess implements Action {
  readonly type = PersonsActionTypes.LoadPersonsSuccess;

  constructor(readonly payload: { personsData: Person[] }) {

  }
}

export class PersonsError implements Action {
  readonly type = PersonsActionTypes.PersonError;

  constructor(readonly payload: { error: string }) {

  }
}


export type ActionsUnion = LoadPersons | PersonsError;