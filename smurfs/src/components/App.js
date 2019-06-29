import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import './App.css';
import Smurf from './Smurf';
import Form from './Form';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        {this.props.smurfs.map(smurf => <Smurf smurf={smurf} />)}

        <Form />

      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
