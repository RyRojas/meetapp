import React from 'react';
import { shallow } from 'enzyme';
import { NumberOfEvents } from '../NumberOfEvents';

describe('<NumberOfEvents /> Component', () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('Number of events input renders', () => {
    expect(NumberOfEventsWrapper.find('.events-displayed-input')).toHaveLength(
      1
    );
  });

  test('Input only accepts numbers', () => {
    expect(
      NumberOfEventsWrapper.find('.events-displayed-input').prop('type')
    ).toBe('number');
  });

  test('Default number displayed is 32', () => {
    expect(
      NumberOfEventsWrapper.find('.events-displayed-input').prop('value')
    ).toBe(32);
  });

  test('User input changes value', () => {
    const inputObject = { target: { value: 8 } };
    NumberOfEventsWrapper.find('.events-displayed-input').simulate(
      'change',
      inputObject
    );

    expect(
      NumberOfEventsWrapper.find('.events-displayed-input').prop('value')
    ).toBe(8);
  });
});
