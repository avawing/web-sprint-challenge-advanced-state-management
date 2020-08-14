import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurfs } from "../actions";
import { v4 as uuid } from "uuid";

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    errors: state.errors,
  };
};

function SmurfForm(props) {
  const smurfValues = {
    name: '',
    age: 0,
    height: '',
    id: uuid()
  };

  const [smurf, setSmurf] = useState(smurfValues);

  const handleChange = (event) => {
    setSmurf({ ...smurf, [event.target.name]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    postSmurfs(smurf);
    // setSmurf(smurfValues)
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label htmlFor="name">
        Name:{" "}
        <input value = {smurf.name} type="text" name="name" id="name" onChange={handleChange} />
      </label>
      <label htmlFor="age">
        {" "}
        Age: <input value = {smurf.age} type="number" name="age" id="age" onChange={handleChange} />
      </label>
      <label htmlFor="height">
        {" "}
        Height:{" "}
        <input value = {smurf.height} type="text" name="height" id="age" onChange={handleChange} />
      </label>
      <button>Add Smurf</button>
    </form>
  );
}

export default connect(mapStateToProps, { postSmurfs })(SmurfForm);
