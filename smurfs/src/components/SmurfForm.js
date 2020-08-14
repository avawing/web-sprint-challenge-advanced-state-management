import React from 'react'
import {connect} from 'react-redux'
import postSmurfs from '../actions'
import { v4 as uuid } from 'uuid';

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        errors: state.errors
    };
  };

function SmurfForm(props){

const handleChange = event => {
        {name: event.target.value };
      }
    
const handleSubmit = event => {
        event.preventDefault();
    
const smurf = {
    name: '',
    age: 0,
    height: 0,
    id: uuid()
        };
    
    return(
        <form onSubmit = {postSmurfs(smurf)}style = {{display: 'flex', flexDirection: 'column'}}>
        <label htmlFor = 'name'>Name: <input type = 'text' name = 'name' id = 'name' /></label>
        <label htmlFor = 'age'> Age: <input type = 'text' age = 'age' id = 'age' /></label>
        <label htmlFor = 'height'> Height: <input type = 'text' height = 'height' id = 'age' /></label>
        <button>Add Smurf</button>
        </form>
    )
}

export default connect(mapStateToProps, {postSmurfs})(SmurfForm)