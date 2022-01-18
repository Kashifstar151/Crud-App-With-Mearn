import { useState } from "react";
import axios from "axios";
import "./style/inputStudent.css"
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>

const Input = () => {

    const initialState = {
        firstName: "",
        lastName: "",
        place: ""
    }
    const [Text, setText] = useState(initialState)

    const handleChange = (e) => {
        const { value, name } = e.target;
        setText({ ...Text, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { firstName, lastName, place } = Text
        const user = { firstName, lastName, place }
        console.log(user)
        axios.post('http://localhost:4200/Student', user).then((result) => {
            if (result) {
                console.log("succesfully created")
            }
        }).catch((err) => {
            console.log(err)
        });
    }
    return (
        <div className="row-text-center">
            <div class="form__group field"> Create User <br></br>
                {/* <form onsubmit></form> */}
                <input type="text" name="firstName" class="form__input" onChange={handleChange} value={Text.firstName} /><br></br>
                <input type="text" name="lastName" class="form__input" onChange={handleChange} value={Text.lastName} /><br></br>
                <input type="text" name="place" class="form__input" onChange={handleChange} value={Text.place} /><br></br>
                <button type="submit" class="btn" onClick={handleSubmit}>Create</button>

            </div>
        </div>
    )
}
export default Input
