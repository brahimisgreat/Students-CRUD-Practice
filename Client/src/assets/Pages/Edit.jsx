import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Edit = () => {
    
    const { id } = useParams();

    useEffect(() => {
      axios.get("http://localhost:3001/read/"+id)
      .then((res) => {
        console.log(res.data[0]);
        setValues({...values, firstName: res.data[0].firstname, lastName: res.data[0].Lastname, email: res.data[0].email});
      })
      .catch((error) => console.log(error));
    }, []);
    
    
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email:'',
    });
      
  return (
    <div>
    <h1>Update student</h1>
      
        <input
          type="text"
          placeholder="FirstName"
          value={values.firstName}
          onChange={(e) =>
            setValues({ ...values, firstName: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="LastName"
          value={values.lastName}
          onChange={(e) => setValues({ ...values, lastName: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          required
        />
        <button type="submit">Submit</button>
      
    <Link to='/'>back</Link>
    </div>
  )
}
