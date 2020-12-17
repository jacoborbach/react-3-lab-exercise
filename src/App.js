import { Component } from 'react';
import Header from './Components/Header';
import DisplayPerson from './Components/DisplayPerson';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      from: '',
      title: '',
      employer: '',
      favoriteMovies =[]
    }
  }
  previousPerson = () => {
    // if () for current count 1
    //else normal display functionality
  }

  nextPerson = () => {
    // if for count 25
    //else
    //normal functionality

  }

  render() {
    return (
      <section className="App" >
        <Header />
        <div className="body">
          <DisplayPerson />
          <button onClick={this.previousPerson}>Previous</button>
          <button onClick={this.nextPerson}>Next</button>
        </div>
      </section>
    );
  }
}

export default App;
