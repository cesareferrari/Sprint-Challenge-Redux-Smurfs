import React from 'react';

class Form extends React.Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  handleChanges = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  submitSmurf = event => {
    this.props.addSmurf(event, this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  render() {
    return(
      <div>
        <h2>Add Smurf</h2>
        <form onSubmit={this.submitSmurf} >
        <input 
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChanges}
        />

        <input 
          type="text"
          name="age"
          placeholder="Age"
          value={this.state.age}
          onChange={this.handleChanges}
        />

        <input 
          type="text"
          name="height"
          placeholder="Height"
          value={this.state.height}
          onChange={this.handleChanges}
        />

        <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
