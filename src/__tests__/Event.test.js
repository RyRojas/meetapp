import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import { Event } from '../Event';

describe('<Event /> Component', () => {
  const event = mockData[0];
  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event eventData={event} />);
  });

  test('Event renders properly', () => {
    expect(EventWrapper.find('.event-card')).toHaveLength(1);
  });

  test('Event renders collapsed by default', () => {
    expect(EventWrapper.children()).toHaveLength(4);
  });

  test('Event expands when details button clicked', () => {
    EventWrapper.find('.event-card__details-toggle').simulate('click');
    expect(EventWrapper.children()).toHaveLength(6);
  });

  test('All information renders correctly', () => {
    const expectedChildren = [
      event.summary,
      event.start.dateTime,
      event.location,
      event.description,
      'See Event in Calendar',
      'Show Details',
    ];
    expect(
      EventWrapper.find('.event-card')
        .children()
        .map((child) => child.text())
    ).toEqual(expectedChildren);
  });

  test('Event collapses when button clicked again', () => {
    EventWrapper.find('.event-card__details-toggle').simulate('click');
    expect(EventWrapper.children()).toHaveLength(4);
  });
});
