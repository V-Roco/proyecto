import './App.css';
import Cover from "./components/cover/Cover";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/about/About";


function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Cover/>
      <About/>
      
    </div>
  );
}

export default App;
