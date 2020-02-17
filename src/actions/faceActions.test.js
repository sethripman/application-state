import { drinkCoffee, DRINK_COFFEE, EAT_SNACK, eatSnack, TAKE_NAP, takeNap, STUDY, study, EXERCISE, exercise } from './faceActions';


describe('face actions', () => {
  it('has a DRINK_COFFEE action', () => {
    const action = drinkCoffee();
    expect(action).toEqual({
      type: DRINK_COFFEE
    });
  });

  it('has an EAT_SNACK action', () => {
    const action = eatSnack();
    expect(action).toEqual({
      type: EAT_SNACK
    });
  });

  it('has a TAKE_NAP action', () => {
    const action = takeNap();
    expect(action).toEqual({
      type: TAKE_NAP
    });
  });

  it('has a STUDY action', () => {
    const action = study();
    expect(action).toEqual({
      type: STUDY
    });
  });

  it('has an EXERCISE action', () => {
    const action = exercise();
    expect(action).toEqual({
      type: EXERCISE
    });
  });
});