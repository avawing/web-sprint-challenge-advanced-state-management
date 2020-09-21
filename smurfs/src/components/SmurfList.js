import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchSmurfs} from '../actions'

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        errors: state.errors
    };
  };

function SmurfList(props){
    useEffect(()=>{
        props.fetchSmurfs()
    }, [props.smurfs])

    return(
        <div>
        <h1>The Smurf Village</h1>
        {console.log(props.smurfs)}
    {props.smurfs.length > 0 ? props.smurfs.map(smurf => {return <h2>Name: {smurf.name}</h2> }) : null}</div>
    )
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList)