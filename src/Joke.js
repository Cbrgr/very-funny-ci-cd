import React, { Component } from 'react';
import './App.css';

class Joke extends Component {

  render() {
    return (
        <div className="joke__content">
        {console.log(this.props.setup)}
            <p className="joke__setup">{this.props.setup}</p>
            <p className="joke__punchline">{this.props.punchline}</p>
        </div>
    );
  }
}

export default Joke;
