import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import { EventList } from '../EventList';
import { CitySearch } from '../CitySearch';
import { NumberOfEvents } from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';
import { act } from 'react-dom/test-utils';

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

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render events displayed input', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

describe('<App /> Integration', () => {
  //Mount wrapper and ensure all promises are settled
  let AppWrapper;
  beforeEach(async () => {
    AppWrapper = mount(<App />);
    await act(async () => {
      await flushPromises();
      AppWrapper.update();
    });
  });

  afterEach(() => AppWrapper.unmount());

  test('App properly renders Events in EventList', () => {
    const Events = AppWrapper.find('Event');
    expect(Events).toHaveLength(mockData.length);
    for (let i = 0; i < mockData.length; i++) {
      expect(Events.at(i).prop('eventData')).toEqual(mockData[i]);
    }
  });

  test('App properly renders suggested locations in CitySearch', () => {
    expect(AppWrapper.find('.suggestions').children()).toHaveLength(3);
  });

  test('Get list of events matching city selected by user', async () => {
    const CitySearchWrapper = AppWrapper.find(CitySearch);

    const locations = extractLocations(mockData),
      selectedIndex = Math.floor(Math.random() * locations.length),
      selectedLocation = locations[selectedIndex],
      expectedEvents = mockData.filter(
        (event) => event.location === selectedLocation
      );

    CitySearchWrapper.find('.suggestions li')
      .at(selectedIndex)
      .simulate('click');

    const Events = AppWrapper.find('Event');

    //Assertions
    expect(Events).toHaveLength(expectedEvents.length);
    for (let i = 0; i < expectedEvents.length; i++) {
      expect(Events.at(i).prop('eventData')).toEqual(expectedEvents[i]);
    }
  });

  test('Displays all events when user selects "See all cities"', async () => {
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    //To trigger re-render from initial state
    suggestionItems.at(0).simulate('click');

    //Target behavior
    suggestionItems.at(suggestionItems.length - 1).simulate('click');

    //Assertion
    const Events = AppWrapper.find('Event');

    expect(Events).toHaveLength(mockData.length);
    for (let i = 0; i < Events.length; i++) {
      expect(Events.at(i).prop('eventData')).toEqual(mockData[i]);
    }
  });

  test('NumberOfEvents should determine total events rendered', () => {
    AppWrapper.find('.events-displayed-input').simulate('change', {
      target: { value: 2 },
    });
    expect(AppWrapper.find('Event').length).toBeLessThanOrEqual(2);
  });
});
