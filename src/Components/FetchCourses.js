import React, { useEffect, useState } from "react";

function FetchCourses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div>FetchCourses</div>;
}

export default FetchCourses;
