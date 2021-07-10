import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            timerIDs: []
        }
      }
  componentDidMount(){
      return fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => console.log(data));
  }  
  
  render() {
    console.log(this.state.timerIDs);
    return (
      <div className="App">
       

      </div>
    );
  }

}

export default App;