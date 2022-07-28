import './App.css';
import React from 'react'
import { useState } from 'react'
import { handleDecrement, handleIncrement } from './Redux/action';
import { store } from './Redux/store'

function App() {

  const { dispatch } = store;
  const { counter } = store.getState()
  const [state, setState] = useState(0)

  const forceUpdate = () => setState(prev => prev + 1)

  store.subscribe(() => {
    // console.log("after dispatch", store.getState())
    forceUpdate()
  });
  return (
    <div className="App">
      <h1>Counter:{counter} </h1>
      <div>
        <button 
        onClick={() =>{
          dispatch(handleIncrement());
          // setLocal((prev) => prev + 1)
        }}
        >
          Increment</button>
        <button onClick={() => {
          dispatch(handleDecrement());
          // setLocal((prev) => prev - 1)
          }}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
