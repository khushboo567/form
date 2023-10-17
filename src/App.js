import logo from './logo.svg';
import './App.css';
import Home1 from './Components/Home';
import Aboutus from './Components/AboutUs';


function App() {
  const name="khushboo"
  
  return (
    <div>
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      <>
      <h4>name:{name}</h4>
      <Home1></Home1>
      <Aboutus/>
      </>
    </div>
  );
}

export default App;
