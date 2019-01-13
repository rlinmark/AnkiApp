import React, { Component } from 'react';
import AnkiCardList from './AnkiCardList'

class AnkiCardDashboard extends React.Component {
  state = {
    cards: this.props.cards
  }

  render() {
    return (
      <div className="anki-card-dashboard-container">
        <div className="row">
          <div className="col-sm">
            <h1 className="title">Anki Cards</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <AnkiCardList cards={this.state.cards} />
          </div>
        </div>
      </div>
    )
  }
}

export default AnkiCardDashboard;