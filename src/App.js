import React, {useState, useEffect} from 'react'
import './App.css';
import Cover from "./components/cover/Cover.js"
import Navbar from "./components/navbar/Navbar.js"
import About from "./components/about/About.js"
import Slider from "./components/slider/Slider"
import Info from "./components/info/Info"
import Footer from "./components/footer/Footer"
import Skills from './components/skills/Skills';
import { useMediaQuery } from 'react-responsive'

function App() {
  const[scrollHeight, setScrollHeight]=useState(0);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const handleScroll= () =>{
    const  position = window.pageYOffset;
    setScrollHeight(position);
    console.log(scrollHeight);
  }
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  },[scrollHeight])
  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight}></Navbar>
      <Cover isScrolling={scrollHeight}></Cover>
      <About isScrolling={scrollHeight}></About>
      <Skills></Skills>
      {isTabletOrMobile?<p>Mobile</p>:<Slider></Slider>}
      
      <Info></Info>
      <Footer></Footer>
    </div>
  );
}

export default App;
