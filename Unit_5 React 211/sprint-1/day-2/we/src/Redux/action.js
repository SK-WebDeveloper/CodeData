const handleIncrement = () => {
    // setCounter(prev => prev+1)
    return {
        type: "INCREMENT",
        payload: 1
    }
    // console.log(store.getState())
}
const handleDecrement = () => {
    // setCounter(prev => prev - 1)
    return {
        type: "DECREMENT",
        payload: 1
    }
    // console.log(store.getState())
}

export { handleIncrement, handleDecrement }