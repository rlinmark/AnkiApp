import React from 'react';
import { shallow } from 'enzyme';
import AnkiCardDashboard from '../components/AnkiCardDashboard'

describe('AnkiCardDashboard', () => {

  const cards = [
    {
      id: 1001,
      question: 'Question 1',
      answer: 'Answer 1',
      grade: 'Grade 1'
    },
    {
      id: 1002,
      question: 'Question 2',
      answer: 'Answer 2',
      grade: 'Grade 2'
    }
  ];

  const wrapper = shallow(
    <AnkiCardDashboard
      cards={cards}
    />
  );

  it('should display title "Anki Cards"', () => {
    expect(
      wrapper.find('.anki-card-dashboard-container .title').first().text()
    ).toEqual('Anki Cards');
  });

});