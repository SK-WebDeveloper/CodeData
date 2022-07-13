import { useState } from "react"

function Form() {

    const [data, setData] = useState({
        name: "",
        surname: "",
        status: false,
        gender: "",
        country:""
    })

    const [text, setText] = useState([])

    const handleChange = (e) => {
        const { value, name, type, checked} = e.target
        const x = type === "checkbox" ? checked : value
        setData({
            ...data,
            [name]: x
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setText([...text, data])
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="name" name="name" onChange={handleChange} />
                </div>
                <div>
                    <input type="text" name="surname" onChange={handleChange} placeholder="surname" />
                </div>
                <div>
                    <input type="checkbox" onChange={handleChange} name="status" />
                    <span>Gender</span>
                    <p>{data.status ? data.gender = "male" : data.gender = "female"}</p>
                </div>
                <div>
                    <select onChange={handleChange} name = "country">
                        <option>Select Country</option>
                        <option value="India" >India</option>
                        <option value="USA">USA</option>
                        <option value="China">China</option>
                    </select>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Form