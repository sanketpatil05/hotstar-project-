import logo from './logo.svg';
import './App.css';
import {Routes , Route} from "react-router-dom" ;
import {Navbar} from "./components/Navbar" ;
import { SingleCarousel } from './components/SingleCarousel'; 
import { Home } from  "./components/Homes" ; 
import { Movies } from './components/Movies';
import {Sports} from "./components/Sports" ; 
import {Diseny} from "./components/Diseny" ;
import {Kids} from "./components/Kids" ;
import {Tv} from "./components/Tv" ;  
import { Footer } from './components/footer';
import Ragister from "./components/Ragister/Ragister" ; 
import {Clickmovies} from './components/Clickmovies'
import Subscrtiption from './components/Subscrtiption'
function App() {
  return (
    <div className="App">
     <Navbar/> 

     <Routes>
      <Route path = {"/"} element = {<Home/>}/>
      <Route path = {"/Sports"} element = {<Sports/>}/>
      <Route path = {"/Movies"} element = {<Movies/>}/>
      <Route path = {"/Movies/:id"} element = {<Clickmovies/>}/>
      <Route path = {"/Diseny"} element = {<Diseny/>}/>
      <Route path = {"/Kids"} element = {<Kids/>}/>
      <Route path = {"/Tv"} element = {<Tv/>}/> 
      <Route path = {"/Login"} element = {<Ragister/>}/> 
      <Route path = {"/subscription"} element = {<Subscrtiption/>}/> 
      
    </Routes>

     <Footer/>
    </div>
     
  );
}

export default App;
