import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/students")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>student List</h1>
      <Link to='/create'>create +</Link>
      {data.map((student) => {
        return (
          <div key={student.id}>
            <h1>{student.name}</h1>
            <p>{student.age}</p>
            <Link to={`/read/${student.id}`}>Read</Link>
            <button>Delete</button>
            <Link to={`/edit/${student.id}`}>Edit</Link>
          </div>
        );
      })}
    </div>
   
  )
};
