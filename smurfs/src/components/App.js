import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
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

  addSmurf = (event, smurf) => {
    event.preventDefault();

    const newSmurf = {
      name: smurf.name,
      age: parseInt(smurf.age, 10),
      height: smurf.height
    };

    this.props.addSmurf(newSmurf);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <div className="smurf-list">
          {this.props.smurfs.map(smurf => <Smurf smurf={smurf} key={smurf.id} />)}
        </div>

        <Form addSmurf={this.addSmurf} />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs
  }
};

export default connect(mapStateToProps, {addSmurf, getSmurfs})(App);
