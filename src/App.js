import logo from './logo.svg';
import './App.css';
import Home1 from './Components/Home';
import Aboutus from './Components/AboutUs';


function App() {
  // const name="khushboo"
// const [name,setname]=useState()
// const [state, setState] = useState(initialState);
  return (
    <div>
      {/* <h4>name:{name}</h4> */}
      <Home1 name="khushboo"></Home1>
      <Aboutus/>
      </div>
  );
}

export default App;
