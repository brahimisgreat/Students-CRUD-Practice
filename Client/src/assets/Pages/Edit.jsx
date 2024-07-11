import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Edit = () => {
    
    const [student, setStudent] = useState([]);
    const { id } = useParams();

    
    useEffect(() => {
        axios.get("http://localhost:3001/read/"+id).then((res) => {
            console.log(res.data);
            setValues({
              ...values,
              firstName: res.data[0].firstName,
              lastName: res.data[0].lastName,
              email: res.data[0].email
            });
        });
    }, []);
    
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
      
  return (
    <div>
    <h1>Update student</h1>
      <form>
        <input
          type="text"
          placeholder="FirstName"
          onChange={(e) =>
            setStudent({ ...student, firstName: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="LastName"
          onChange={(e) => setStudent({ ...student, lastName: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setStudent({ ...student, email: e.target.value })}
          required
        />
        <button type="submit">Submit</button>
      </form>
    <Link to='/'>back</Link>
    </div>
  )
}
