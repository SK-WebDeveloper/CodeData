import { useState, useEffect } from "react";

function Todo(){
    // data
    const [data, setData] = useState([]);

    //fetchData

    const getTodos = async() =>{
        try {
            let data = fetch("https://jsonplaceholder.typicode.com/posts");
            data = data.json();
            console.log(data)
        } catch (error) {
            console.log('error')
        }
    }

    useEffect(() =>{
        getTodos()
    },[])
    return(
        <div>
            <div>
                <h1>Todos</h1>
                <div>

                </div>
            </div>
        </div>
    )
}