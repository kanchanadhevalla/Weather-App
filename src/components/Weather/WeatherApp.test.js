import React from 'react'
import WeatherApp from './WeatherApp'
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<WeatherApp />);
});