import './App.css';
import Cover from "./components/cover/cover";
import Galeria from './components/Galeria';



function App() {
  return (
    <div className="App">
     
    <Cover/>
    <h1>QBONITOTODO</h1>
    <button onClick={Galeria}></button>

    </div>
  );
}

export default App;
