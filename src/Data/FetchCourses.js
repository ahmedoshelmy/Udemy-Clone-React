import React, { useEffect, useState } from "react";
import axios from "axios";
function groupCourses(data, n) {
  var group = [];
  for (var i = 0, j = 0; i < data.length; i++) {
    if (i >= n && i % n === 0) j++;
    group[j] = group[j] || [];
    group[j].push(data[i]);
  }
  return group;
}
async function FetchCourses() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3005/python`)
      .then((res) => {
        console.log(res.data);
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
