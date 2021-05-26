import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';
import { act } from 'react-dom/test-utils';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

const flushPromises = () => new Promise(setImmediate);

defineFeature(feature, (test) => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given('the user is on the home page', async () => {
      AppWrapper = mount(<App />);
      await act(async () => {
        await flushPromises();
        AppWrapper.update();
      });
    });

    when('the user has not expanded an event', () => {});

    then('events will be listed in their collapsed view', () => {
      expect(AppWrapper.find('.event-card').at(0).children()).toHaveLength(4);
    });
  });

  test('User can expand an event to see its details', ({
    given,
    and,
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

    and('the user has not expanded an event', () => {
      expect(AppWrapper.find('.event-card').at(0).children()).toHaveLength(4);
    });

    when('the user clicks on an event listing', () => {
      AppWrapper.find('.event-card__details-toggle').at(0).simulate('click');
    });

    then("the event element will expand to show the event's details", () => {
      expect(AppWrapper.find('.event-card').at(0).children()).toHaveLength(6);
    });
  });

  test('User can collapse an event to hide its details', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('the user has expanded an event', async () => {
      AppWrapper = mount(<App />);
      await act(async () => {
        await flushPromises();
        AppWrapper.update();
      });
      AppWrapper.find('.event-card__details-toggle').at(0).simulate('click');
      expect(AppWrapper.find('.event-card').at(0).children()).toHaveLength(6);
    });

    when('the user clicks on the expanded event listing', () => {
      AppWrapper.find('.event-card__details-toggle').at(0).simulate('click');
    });

    then("the event element will collapse to hide the event's details", () => {
      expect(AppWrapper.find('.event-card').at(0).children()).toHaveLength(4);
    });
  });
});
