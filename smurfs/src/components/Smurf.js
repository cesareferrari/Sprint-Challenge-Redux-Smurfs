import React from 'react';

const Smurf = props => {
  return(
    <div className="smurf">
      <h4>{props.smurf.name}</h4>
      <div className="smurf-details">
        Age: {props.smurf.age}<br/>
        Height: {props.smurf.height}
      </div>
    </div>
  )
}

export default Smurf;
