import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Controls dispatch={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
