import React from 'react';
import { shallow } from 'enzyme';
import MoodsFunctionalComponent from './MoodsFunctionalComponent';

describe('MoodsFunctionalComponent', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<MoodsFunctionalComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
