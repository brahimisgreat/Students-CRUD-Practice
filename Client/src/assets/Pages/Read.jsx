import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export const Read = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3001/read/"+id).then((res) => {
      console.log(res.data);
      setData(res.data[0]);
    });
  }, []);
  return (
    <div>
      <h2>Student Detail</h2>
      {/* <h2>{data.email}</h2>
      <h2>{data.Lastname}</h2>
      <h3>{data.email}</h3> */}
      <Link to='/'>Back</Link>
    </div>
  );
};
