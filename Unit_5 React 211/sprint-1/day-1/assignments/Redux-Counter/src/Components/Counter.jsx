import React from 'react'
import { useState } from 'react'
import { handleDecrement, handleIncrement } from '../Redux/action';
import { store } from '../Redux/store'

export default function Counter() {

    const { dispatch } = store;
    const { counter } = store.getState()
    const [state, setState] = useState(0)

    const forceUpdate = ( ) => setState(prev=>prev+1)
    
    store.subscribe(() => {
        // console.log("after dispatch", store.getState())
        forceUpdate()
    });
    
    return (
        <div>
            <h1>Counter:{counter} </h1>
            <div>
                <button onClick={() => dispatch(handleIncrement())}>Increment</button>
                <button onClick={() => dispatch(handleDecrement())}>Decrement</button>
            </div>
        </div>
    )
}
