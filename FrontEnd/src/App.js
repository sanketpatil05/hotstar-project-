import logo from './logo.svg';
import './App.css';
import {Routes , Route} from "react-router-dom"
import { Home } from './Components/Home/Home';
import { Movies } from './Components/MovieShow/Movies';

function App() {
  return (
    <div className="App">
    
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/Movies/:id'  element={<Movies/>}/>
    </Routes>
    </div>
  );
}

export default App;
