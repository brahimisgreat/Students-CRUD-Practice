import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const CreateStudent = () => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/create", student)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Add student</h1>
      <form onSubmit={handleSubmit}>
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
      <Link to='/'>Back</Link>
    </div>
  );
};
