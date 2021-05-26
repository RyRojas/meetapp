import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';
import { act } from 'react-dom/test-utils';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

//Mocks our external API call, leaves other local API functions intact
jest.mock('../api', () => {
  return {
    __esModule: true,
    ...jest.requireActual('../api'),
    getEvents: () => {
      return Promise.resolve(mockData);
    },
  };
});

const flushPromises = () => new Promise(setImmediate);

defineFeature(feature, (test) => {
  test('When user hasn’t searched for a city, show upcoming events from all cities.', ({
    given,
    when,
    then,
  }) => {
    given('user hasn’t searched for any city', () => {});

    let AppWrapper;
    when('the user opens the app', async () => {
      AppWrapper = mount(<App />);
      await act(async () => {
        await flushPromises();
        AppWrapper.update();
      });
    });

    then('the user should see the list of upcoming events.', () => {
      expect(AppWrapper.find('Event')).toHaveLength(mockData.length);
    });
  });

  test('User should see a list of suggestions when they search for a city', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    const locations = extractLocations(mockData);
    const eventObject = { target: { value: 'Berlin' } };

    given('the main page is open', async () => {
      AppWrapper = mount(<App />);
      await act(async () => {
        await flushPromises();
        AppWrapper.update();
      });
    });

    when('the user starts typing in the city textbox', () => {
      AppWrapper.find('.search-bar').simulate('change', eventObject);
    });

    then(
      'the user should receive a list of cities (suggestions) that match what they’ve typed',
      () => {
        const filteredLocations = locations.filter((location) =>
          location
            .toUpperCase()
            .includes(eventObject.target.value.toUpperCase())
        );

        expect(
          AppWrapper.find('.suggestions li').map((li) => li.text())
        ).toEqual(filteredLocations.concat('See all cities'));
      }
    );
  });

  test('User can select a city from the suggested list', ({
    given,
    and,
    when,
    then,
  }) => {
    let AppWrapper;
    given('user was typing “Berlin” in the city textbox', async () => {
      AppWrapper = mount(<App />);
      await act(async () => {
        await flushPromises();
        AppWrapper.update();
      });
      AppWrapper.find('.search-bar').simulate('change', {
        target: { value: 'Berlin' },
      });
    });

    and('the list of suggested cities is showing', () => {
      expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
    });

    when(
      'the user selects a city (e.g., “Berlin, Germany”) from the list',
      () => {
        AppWrapper.find('.suggestions li').at(0).simulate('click');
      }
    );

    then(
      'their city should be changed to that city (i.e., “Berlin, Germany”)',
      () => {
        expect(AppWrapper.find('.search-bar').prop('value')).toBe(
          'Berlin, Germany'
        );
      }
    );

    and(
      'the user should receive a list of upcoming events in that city',
      () => {
        const expectedEvents = mockData.filter((event) =>
          event.location.includes('Berlin, Germany')
        );
        expect(AppWrapper.find('Event')).toHaveLength(expectedEvents.length);
      }
    );
  });
});
