import React, { Component } from 'react';
import AnkiCard from './AnkiCard'

class AnkiCardList extends React.Component {
  state = {
    cards: this.props.cards
  }

  render() {
    const cardComponents = this.state.cards.map((card) => (
      <li key={card.id}>
        <AnkiCard
          id={card.id}
          question={card.question}
          answer={card.answer}
          grade={card.grade}
        />
      </li>
    ));

    return (
      <ul className="anki-card-list">
        {cardComponents}
      </ul>
    )
  }
}

export default AnkiCardList;