import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from "react-router-dom";
function NavigationBar(props) {
  const onChange = props.onChange 
  const onClick = props.onClick
  return (
    <nav className="top-navigation sticky-top navbar">
      <a href="/">
        <img
          className="logo"
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
      <form className="search-form big" action="" role="search">
        <span className="search-div big" >
        <div>
          <a className="icon big">
            <SearchIcon/>
          </a>
        </div>
        <input
          id="search-input"
          className="search-bar big"
          type="search"
          placeholder="Search for anything"
          onChange={onChange}
        />
        </span>
         <button type="button" id="searchbutton" className="white-button" onClick={onClick}>
        Search
      </button>
      </form>
     
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
