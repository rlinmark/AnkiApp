import React, { Component } from 'react';

class AnkiCard extends React.Component {
  state = {
    id: this.props.id,
    question: this.props.question,
    answer: this.props.answer,
    grade: this.props.grade
  }

  render() {
    return (
      <div className="anki-card card">
        <div className="card-header">{this.state.grade}</div>
        <div className="card-body">
          <p className="card-text">{this.state.question}</p>
        </div>
      </div>
    )
  }
}

export default AnkiCard;