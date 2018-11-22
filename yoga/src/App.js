import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posture from "./Posture";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class App extends Component {
  render() {
    console.log(this.props)
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }
    return (
      <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1><code>Yoga Postures</code></h1>
         <div>
           <ul>
             {this.props.data.yogaPostures && this.props.data.yogaPostures.map(posture => (
               <li key={posture.name}><Posture name={posture.name} /></li>
             ))}
           </ul>
         </div>
       </header>
      </div>
    );
  }
}

const POSTURES_QUERY = gql`
  query POSTURES_QUERY {
    yogaPostures {
      name
    }
  }
`

export default graphql(POSTURES_QUERY)(App);
