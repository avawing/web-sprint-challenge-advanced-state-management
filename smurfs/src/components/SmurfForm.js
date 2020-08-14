import React, {useState} from 'react'
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
    const [smurf, setSmurf] = useState(smurfValues)

    const smurfValues = {
        name: '',
        age: 0,
        height: 0,
        id: uuid()
            };

const handleChange = event => {
    setSmurf({...smurf, 
        [event.target.name]: event.target.value})
       
      }
    
const handleSubmit = event => {
        event.preventDefault();
        postSmurfs(smurf)
}
    

    
    return(
        <form onSubmit = {handleSubmit}style = {{display: 'flex', flexDirection: 'column'}}>
        <label htmlFor = 'name'>Name: <input type = 'text' name = 'name' id = 'name' onChange = {handleChange} /></label>
        <label htmlFor = 'age'> Age: <input type = 'text' age = 'age' id = 'age' onChange = {handleChange}/></label>
        <label htmlFor = 'height'> Height: <input type = 'text' height = 'height' id = 'age' onChange = {handleChange}/></label>
        <button>Add Smurf</button>
        </form>
    )
}

export default connect(mapStateToProps, {postSmurfs})(SmurfForm)