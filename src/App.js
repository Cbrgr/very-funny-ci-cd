import React, { Component } from 'react';
// import Joke from '../src';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResult: null,
      isLoaded: false,
      clickCount: 0,
      setup: '',
      punchline: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }



  componentDidMount() {
    // this.generateQuote();
  }

  handleClick() {
    this.generateQuote();
  }

  generateQuote = () => {
      fetch('https://official-joke-api.appspot.com/jokes/random', {
        headers: {
          Accept: "application/json",
        }
      })
      .then(response => response.json())
      .then((responseData) => {
        this.setState({
          apiResult: responseData,
          isLoaded: true,
          setup: responseData.setup,
          punchline: responseData.punchline,
        });
      })
      .catch(error => this.setState({ error }));

    this.setState({
      clickCount: this.state.clickCount + 1,
    })
  }

  render() {
    return (
    <div className="main">
        <div className="inner">
            <h1 className="title">Random Joke Machine</h1>
            <div className="joke">
            <div className="joke__content">
                <p className="joke__setup">{this.state.setup}</p>
                <p className="joke__punchline">{this.state.punchline}</p>
            </div>
                {console.log(this.state.apiResult)}
                {console.log(this.state.setup)}
                {console.log(this.state.clickCount)}
                <button className="joke__new" onClick={this.handleClick}>New Joke</button>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
