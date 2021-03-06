import React from "react";
import "./App.css";
import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'

function App(){
  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <SmurfList />
      <SmurfForm />
      <div>Have fun!</div>
    </div>
  )
}

export default App;
