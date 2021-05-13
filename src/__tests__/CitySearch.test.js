import React from 'react';
import { shallow } from 'enzyme';
import { CitySearch } from '../CitySearch';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

describe('<CitySearch /> component', () => {
  const locations = extractLocations(mockData);
  let CitySearchWrapper;

  beforeAll(() => {
    CitySearchWrapper = shallow(<CitySearch locations={locations} />);
  });

  beforeEach(() => {
    CitySearchWrapper.find('.search-bar').simulate('change', {
      target: { value: '' },
    });
  });

  test('render text input', () => {
    expect(CitySearchWrapper.find('.search-bar')).toHaveLength(1);
  });

  test('render search suggestions', () => {
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
  });

  test('ensure text input renders correctly', () => {
    expect(CitySearchWrapper.find('.search-bar').prop('value')).toEqual('');
  });

  test('ensure suggestions render correctly', () => {
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(
      locations.length + 1
    );

    for (let i = 0; i < locations.length; i++) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(
        locations[i]
      );
    }
  });

  test('suggestions change with input', () => {
    const eventObject = { target: { value: 'Berlin' } };
    CitySearchWrapper.find('.search-bar').simulate('change', eventObject);

    const filteredLocations = locations.filter((location) =>
      location.toUpperCase().includes(eventObject.target.value.toUpperCase())
    );

    expect(
      CitySearchWrapper.find('.suggestions li').map((li) => li.text())
    ).toEqual(filteredLocations.concat('See all cities'));
  });

  test('selecting a suggestion should change query', () => {
    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    expect(CitySearchWrapper.find('.search-bar').prop('value')).toBe(
      locations[0]
    );
  });
});
