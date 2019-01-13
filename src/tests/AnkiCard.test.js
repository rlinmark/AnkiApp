import React from 'react';
import { shallow } from 'enzyme';
import AnkiCard from '../components/AnkiCard'

describe('AnkiCard', () => {
  const ankiCard = {
    id: 1000,
    question: 'How does Array\'s map() method work?',
    answer: '',
    grade: 'A'
  }

  const wrapper = shallow(
    <AnkiCard
      id={ankiCard.id}
      question={ankiCard.question}
      answer={ankiCard.answer}
      grade={ankiCard.grade}
    />
  );

  it(`'should display question text "${ankiCard.question}"'`, () => {
    expect(
      wrapper.find('.anki-card .card-body .card-text').first().text()
    ).toEqual(ankiCard.question);
  });

  it(`'should display grade "${ankiCard.grade}"'`, () => {
    expect(
      wrapper.find('.anki-card .card-header').first().text()
    ).toEqual(ankiCard.grade);
  });

});