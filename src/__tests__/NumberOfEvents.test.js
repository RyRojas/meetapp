import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import App from '../App';

const flushPromises = () => new Promise(setImmediate);

describe('<NumberOfEvents /> Component', () => {
  let AppWrapper;
  beforeAll(async () => {
    AppWrapper = mount(<App />);
    await act(async () => {
      await flushPromises();
      AppWrapper.update();
    });
  });

  test('Number of events input renders', () => {
    expect(AppWrapper.find('.events-displayed-input')).toHaveLength(1);
  });

  test('Input only accepts numbers', () => {
    expect(AppWrapper.find('.events-displayed-input').prop('type')).toBe(
      'number'
    );
  });

  test('Default number displayed is 16', () => {
    expect(AppWrapper.find('.events-displayed-input').prop('value')).toBe(16);
  });

  test('User input changes value', () => {
    const inputObject = { target: { value: 8 } };
    AppWrapper.find('.events-displayed-input').simulate('change', inputObject);

    expect(AppWrapper.find('.events-displayed-input').prop('value')).toBe(8);
  });
});
