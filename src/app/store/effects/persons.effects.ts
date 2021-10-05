import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { LoadPersonsSuccess, PersonsActionTypes, PersonsError } from '../actions/persons.actions';
import { AppState } from '../reducers';
import { PersonsService } from '../../services/persons.service';



@Injectable()
export class PersonsEffects {

  loadPersons$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(PersonsActionTypes.LoadPersons),
        mergeMap(() => this.personsService.getPersons()
          .pipe(
            map(persons => new LoadPersonsSuccess({ personsData: persons })),
            catchError((error) => of(new PersonsError({ error: error.statusText })))
          )
        )
      )
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private personsService: PersonsService) { }


}
