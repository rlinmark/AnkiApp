import React from 'react';
import { shallow } from 'enzyme';
import AnkiCardList from '../components/AnkiCardList';

describe('AnkiCardList', () => {

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
    <AnkiCardList
      cards={cards}
    />
  );

  it(`'should display ${cards.length} cards in list'`, () => {
    expect(
      wrapper.find('.anki-card-list li').length
    ).toEqual(cards.length);
  });

})