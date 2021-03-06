import { Component } from 'react';
import Header from './Components/Header';
import DisplayPerson from './Components/DisplayPerson';
import data from './data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      data
    }
  }

  previousPerson = () => {
    if (this.state.count === 0) return;
    const { count } = this.state;
    this.setState({
      count: count - 1
    })

    // if (this.state.data.id === 0) {
    //   previousButton.className = 'hide';
    // } else {
    //   previousButton.className = 'previousButton';
    // }
  }

  nextPerson = () => {
    if (this.state.count === this.state.data.length - 1) return;
    const { count } = this.state;
    this.setState({
      count: count + 1
    })
    // const nextButton = document.getElementById('nextButton');
    // if (this.state.data.id === this.state.data.length - 1) {
    //   nextButton.className = 'hide';
    // } else {
    //   nextButton.className = 'nextButton';
    // }
  }

  // deleteItem = () => {
  //   delete props.personalInfo
  // }

  render() {
    // const prevButton = document.getElementById('previousButton');
    // console.log(prevButton)
    return (
      <section className="App" >
        <Header />
        <div className="body">
          <DisplayPerson count={this.state.count} />
          <button id='previousButton' onClick={this.previousPerson}>Previous</button>
          <button id='nextButton' onClick={this.nextPerson}>Next</button>
        </div>
      </section>
    );
  }
}

export default App;
