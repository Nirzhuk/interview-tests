import React from 'react'
import { mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom'
import HomePage from './index';

it('renders without crashing', () => {
  const wrapper = mount(
  <MemoryRouter initialEntries={["/"]}>
    <HomePage />
  </MemoryRouter>
  );

});