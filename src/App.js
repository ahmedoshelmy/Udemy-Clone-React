import logo from "./logo.svg";
import "./App.css";
import CourseCard from "./Components/CourseCard";

const DummyCourse = {
  id: 567828,
  title: "2022 Complete Python Bootcamp From Zero to Hero in Python",
  headline:
    "Learn Python like a Professional  Start from the basics and go all the way to creating your own applications and games",
  rating: 4.6162734,
  image: "https://img-c.udemycdn.com/course/750x422/567828_67d0.jpg",
  instructors: [
    {
      name: "Jose Portilla",
      jop: "Head of Data Science at Pierian Training",
      image: "https://img-c.udemycdn.com/user/100x100/9685726_67e7_4.jpg",
    },
  ],
  price: 34.99,
};
const DummyCourse2 = {
  id: 577248,
  title: "Python for Beginners with Examples",
  headline:
    "A Python course for the busy ones to learn Python programming. Learn and practice Python by building two complete apps.",
  rating: 4.4764705,
  image: "https://img-c.udemycdn.com/course/750x422/577248_3b6f_13.jpg",
  instructors: [
    {
      name: "Ardit Sulce",
      jop: "Python Programmer. Founder and Author, PythonHow.",
      image: "https://img-c.udemycdn.com/user/100x100/717783_3157_7.jpg",
    },
  ],
  price: 16.99,
};

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <CourseCard {...DummyCourse} />
      <CourseCard {...DummyCourse2} />
    </div>
  );
}

export default App;
