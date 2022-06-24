import './App.css';
import React, { useState, useEffect, useInsertionEffect } from 'react';
import Cover from "./components/cover/cover";
import Navbar from "./components/Navbar/Navbar";




function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = ()=> {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };
useInsertionEffect(() => {
  window.addEventListener("scroll",handleScroll);
},[scrollHeight])


  return (
    <div className="App">

    <Navbar isScrolling={scrollHeight}/>
    <Cover/>
    

    </div>
  );
}

export default App;
