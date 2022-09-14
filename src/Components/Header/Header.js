import React from "react";
import "./Header.css"
function Header() {
  return (
    <header className="head-container">
      <div className="head-bar">
        <h1>New to Udemy? Lucky you.</h1>
        <h3>
          Courses start at E£169.99.Get your new-student offer before it
          expires.
        </h3>
      </div>
      <img
        src="https://i.ibb.co/2qHbQqM/download.png"
        alt="alarm"
        className="alarmphoto"
      />
    </header>
  );
}

export default Header;
