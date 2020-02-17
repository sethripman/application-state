import React, { useReducer } from 'react';
import faceReducer from '../reducers/faceReducer';
import { getFace } from '../selectors/faceSelectors';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { allActions } from '../actions/faceActions';

const MoodsFn = () => {
  const [state, dispatch] = useReducer(faceReducer, {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0,
    exercises: 0
  });

  const face = getFace(state);
  const [drinkCoffee, eatSnack, takeNap, study, exercise] = allActions;

  const dispatchObject = [
    {
      text: 'Drink Coffee',
      func: () => dispatch(drinkCoffee()),
      count: state.coffees
    },

    {
      text: 'Snack',
      func: () => dispatch(eatSnack()),
      count: state.snacks
    },

    {
      text: 'Nap',
      func: () => dispatch(takeNap()),
      count: state.naps
    },

    {
      text: 'Study',
      func: () => dispatch(study()),
      count: state.studies
    },
    
    {
      text: 'Exercise',
      func: () => dispatch(exercise()),
      count: state.exercises
    }
  ];


  return (
    <>
      <Controls dispatch={dispatchObject} />
      <Face emoji={face} />
    </>
  );
};

export default MoodsFn;
