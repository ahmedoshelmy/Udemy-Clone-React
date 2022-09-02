import React from "react";

function NavigationBar() {
  return (
    <nav classNameName="top-navigation">
      <a href="https://www.udemy.com">
        <img
          classNameName="logo"
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          width="91"
          height="34"
          alt=""
        />
      </a>
      <div>
        <a href="" className="categories big">
          Categories
        </a>
      </div>
      <form className="search-div big" action="">
        <div>
          <a className="icon big">
            <i className="bi bi-search"></i>
          </a>
        </div>
        <input
          id="search-input"
          className="search-bar big"
          type="text"
          placeholder="Search for anything"
          value=" "
        />
      </form>
      <button id="searchbutton" className="white-button">
        Search
      </button>
      <a href="" id="udemy-business" className="big">
        Udemy Busines
      </a>
      <a href="" id="teach-on-udemy" className="big">
        Teach on Udemy
      </a>
      <div>
        <a href="" className="icon big">
          <i className="bi bi-cart"></i>
        </a>
      </div>
      <button className="white-button big">
        <a href="">Log in</a>
      </button>
      <button className="sign-button big">
        <a href="">Sign up</a>
      </button>
      <div className="global-button big">
        <a href=" " className="icon">
          <i className="bi bi-globe"></i>
        </a>
      </div>
      <div className="menu">
        <i className="bi bi-list"></i>
      </div>
    </nav>
  );
}

export default NavigationBar;
