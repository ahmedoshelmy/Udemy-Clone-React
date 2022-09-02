import React, { useEffect, useState } from "react";
import axios from "axios";

async function FetchCourses(courseName) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const response = axios
      .get(`http://localhost:3005/${courseName.replace(" ", "")}`)
      .then(setData(response.json))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div />;
}

export default FetchCourses;
