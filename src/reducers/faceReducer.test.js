import reducer from './faceReducer';
import { drinkCoffee, eatSnack, takeNap, study, exercise } from '../actions/faceActions';

describe('face reducer', () => {
  it('handles bad input', () => {
    const action = { type: 'GOBBLEDEGOOK' };
    const newState = reducer({}, action);
    expect(newState).toEqual({});
  });

  it('handles the DRINK_COFFEE action', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ coffees: 1 });
  });

  it('handles the EAT_SNACK action', () => {
    const action = eatSnack();
    const initialState = { snacks: 1 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ snacks: 2 });
  });

  it('handles the TAKE_NAP action', () => {
    const action = takeNap();
    const initialState = { naps: 1 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ naps: 2 });
  });

  it('handles the STUDY action', () => {
    const action = study();
    const initialState = { studies: 1 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ studies: 2 });
  });

  it('handles the EXERCISE action', () => {
    const action = exercise();
    const initialState = { exercises: 1 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ exercises: 2 });
  });
});
