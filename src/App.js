import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import AnkiCardDashboard from './components/AnkiCardDashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

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
      },
      {
        id: 1003,
        question: 'Question 3',
        answer: 'Answer 3',
        grade: 'Grade 3'
      },
      {
        id: 1004,
        title: 'Title 1',
        question: 'Question 4',
        answer: 'Answer 14',
        grade: 'Grade 4'
      }
    ];

    this.state = {
      cards: cards
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/cards-list' render={() => <AnkiCardDashboard cards={this.state.cards} />} />
          
          <Route exact path="/" render={() => (<Redirect to='/cards-list' />)} />
        </Switch>
      </Router>
    );
  }
}

export default App;