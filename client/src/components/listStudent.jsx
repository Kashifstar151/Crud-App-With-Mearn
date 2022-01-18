import axios from "axios"
import { useState } from "react"
const ListStd = () => {
    const initialState = {
        students:[],
        firstName: "",
        lastName: "",
        place: ""
    }
    const [List, setList] = useState(initialState);

    const getList=()=>{
    axios.get('http://localhost:4200/Student').then(res=>{
        console.log(res)
        setList({students:res.data});
    })
}
    return (
              List.map(data=>(<div>
                  <table>
                      <th>First Name</th>
                      <tr><td>data.firstName</td></tr>
                      <th>Last Name</th>
                      <tr><td>data.lastName</td></tr>
                      <th>Place</th>
                      <tr><td>data.place</td></tr>
                      </table>
                      </div> ))

            
       
              )

              }
export default ListStd;