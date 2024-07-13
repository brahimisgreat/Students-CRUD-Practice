import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Home.css'

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

  function handleDelete(id) {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (

<div className="d-flex  vh-100 vw-100 bg-primary justify-content-center align-items-center">
<div className=" bg-white rounded p-3">
<h2>Student List</h2>
<Link to="/create">create +</Link>
  <table className="table">
    <thead>
    <tr>
      <th>Image</th>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
      {data.map((student)=>{
        return(
          <tr key={student.id}>
            <td><img src='https://picsum.photos/200' /></td>
            <td>{student.id}</td>
            <td>{student.firstname} {student.Lastname}</td>
            <td>{student.email}</td>
            <td>
              <Link className="btn btn-sm btn-info mx-1" to={`/read/${student.id}`}>Read</Link>
              <Link className="btn btn-sm btn-primary mx-3" to={`/edit/${student.id}`}>Edit</Link>
              <button className="btn btn-sm btn-danger" onClick={()=>handleDelete(student.id)}>Delete</button>
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
</div>
</div>


    // <div className="home">
    //   <h1>student List</h1>
    //   <Link to="/create">create +</Link>
    //   {data.map((student) => {
    //     return (
    //       <div className="card" key={student.id}>
    //         <img src="https://random.imagecdn.app/500" />
    //         <h1>{student.firstname}</h1>
    //         <p>{student.Lastname}</p>
    //         <p>{student.email}</p>
    //         <Link to={`/read/${student.id}`}>Read</Link>
    //         <button onClick={() => handleDelete(student.id)}>Delete</button>
    //         <Link to={`/edit/${student.id}`}>Edit</Link>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};
