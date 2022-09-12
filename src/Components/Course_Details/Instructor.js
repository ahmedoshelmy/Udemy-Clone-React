import React from 'react'
import "./Instructor.css"
import ShowMore from './ShowMore'
import all, { data1, data2, more1, more2, permanent1, permanent2 } from "./DummyInstructor"
function Instructor() {
  return (
    <div>
    <span class="instructors">
            <h2>Instructors</h2>
        </span>
        <div class="data">
            <a href="https://www.udemy.com/user/avinashjain5/">
                <h3 class="name">Avinash Jain</h3>
            </a>
            <p class="content">CEO of TheCodex.me - Teaching 500,000+ Students how to code </p>
            <div class="profile">
                <img class="image" src="https://img-c.udemycdn.com/user/200_H/10260436_946b_6.jpg"
                    alt="instructor image"/>
                <ul>
                    <li>
                        <i class="uil uil-star"></i>
                        4.4 Instructor Rating
                    </li>

                    <li>
                        <i class="uil uil-award"></i>
                        73,970 Reviews
                    </li>
                    <li>
                        <i class="uil uil-users-alt"></i>
                        894,011 Students
                    </li>
                    <li>
                        <i class="uil uil-play-circle"></i>
                        16 Courses
                    </li>
                </ul>
            </div>
    </div>
    <div class="brief">
        <ShowMore data = {data1}/>      
    </div>
            <div class="data">
            <a href="https://www.udemy.com/user/thecodex/">
                <h2 class="name">The Codex</h2>
            </a>
            <p class="content">Teaching Python through Projects
            </p>
            <div class="profile">
                <img class="image" src="https://img-c.udemycdn.com/user/200_H/52310762_220a.jpg" alt="instructor image"/>
                <ul>
                    <li>
                        <i class="uil uil-star"></i>
                        4.4 Instructor Rating
                    </li>

                    <li>
                        <i class="uil uil-award"></i>
                        73,970 Reviews
                    </li>
                    <li>
                        <i class="uil uil-users-alt"></i>
                        894,011 Students
                    </li>
                    <li>
                        <i class="uil uil-play-circle"></i>
                        16 Courses
                    </li>
                </ul>
            </div>
            <div class="brief">
              <ShowMore data ={data2}/>
            </div>
        </div>
        </div>
        
  )
}

export default Instructor