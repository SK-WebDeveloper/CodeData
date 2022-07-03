import { useState } from "react";
import { useEffect } from "react";

function AfterRender(){
    const [count, setCount] = useState(0)

    useEffect(
        () =>{
            console.log(`title has changed`)
            document.title = `clicked ${count} times`
        },[count])

        return(
            <div>
                <h1>Count:{count}</h1>
                <button onClick={() => setCount(count+1)}>Increment</button>
            </div>
        )
}

export default AfterRender