import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';
import { act } from 'react-dom/test-utils';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

const flushPromises = () => new Promise(setImmediate);

defineFeature(feature, (test) => {
  test('When user hasn’t specified a number, 16 is the default number', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('the user is on the home page', async () => {
      AppWrapper = mount(<App />);
      await act(async () => {
        await flushPromises();
        AppWrapper.update();
      });
    });

    when(
      'the user has not entered a number into the events shown box',
      () => {}
    );

    then('the application will render a maximum of 16 event listings', () => {
      expect(AppWrapper.find('.events-displayed-input').prop('value')).toBe(16);
      expect(AppWrapper.find('.event-card').length).toBeLessThanOrEqual(16);
    });
  });

  test('User can change the number of events they want to see', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('the user is on the home page', async () => {
      AppWrapper = mount(<App />);
      await act(async () => {
        await flushPromises();
        AppWrapper.update();
      });
    });

    when('the user enters a number into the listings shown box', () => {
      AppWrapper.find('.events-displayed-input').simulate('change', {
        target: { value: 2 },
      });
    });

    then(
      'the application will render the specified number of event listings',
      () => {
        expect(AppWrapper.find('.events-displayed-input').prop('value')).toBe(
          2
        );
        expect(AppWrapper.find('.event-card').length).toBeLessThanOrEqual(2);
      }
    );
  });
});
