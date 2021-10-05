import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PersonsEffects } from './persons.effects';

describe('PersonsEffects', () => {
  let actions$: Observable<any>;
  let effects: PersonsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PersonsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PersonsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
