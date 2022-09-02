import React, { useEffect, useState } from "react";
import axios from "axios";

async function FetchCourses() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3005`)
      .then((res) => {
        console.log(res);
        // setData(response.json)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>HEllloooo</h1>
    </div>
  );
}

export default FetchCourses;
