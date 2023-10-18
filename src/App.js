import logo from './logo.svg';
import './App.css';
import Home1 from './Components/Home';
import Aboutus from './Components/AboutUs';
import { useState } from "react";

function App() {
  // const name="khushboo"
  const [name,setName]=useState("ritik")
  const [surname,setSurname]=useState("patidar")
  // const [state, setState] = useState(initialState);
  return (
    <div>
      {/* <h4>name:{name}</h4> */}
      <Home1 name={name}/>
      <Aboutus name={name} mySurname={surname} />
    </div>
  );
}

export default App;
