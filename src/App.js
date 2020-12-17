import { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import DisplayPerson from './Components/DisplayPerson';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  previousPerson = () => {

  }

  nextPerson = () => {
    // invoke a display of data
    // call a function or render a component that would go to next person on array
  }

  render() {
    return (
      <section className="App" >
        <Header />
        <body className="body">
          <DisplayPerson />
          <button onclick={this.previousPerson}>Previous</button>
          <button onclick={this.nextPerson}>Next</button>
        </body>
      </section>
    );
  }
}

export default App;
