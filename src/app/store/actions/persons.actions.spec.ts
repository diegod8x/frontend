import * as fromPersons from './persons.actions';

describe('loadPersonss', () => {
  it('should return an action', () => {
    expect(fromPersons.loadPersonss().type).toBe('[Persons] Load Personss');
  });
});
