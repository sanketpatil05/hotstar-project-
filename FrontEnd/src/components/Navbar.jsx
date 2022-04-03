import { Button } from './button';
import './Navbar.css'; 
import {useState,useEffect} from "react" ; 
import {Link} from "react-router-dom" ; 
import axios from "axios" ; 
import { Search } from './search';
 export const Navbar = () =>{ 
     const [movies,setMovies] = useState([]) 
     const [list , setList] = useState([]);
       console.log(list);
         

         const handleChange = (e)=>{
               setMovies([e.target.value])
           }  

      useEffect(()=>{
            axios.get(`http://www.omdbapi.com/?s=${movies}&apikey=687f7d7a`)
            .then((res)=>{
                 setList([...list,res.data.Search])
                })
          },[]) ; 
   
     return ( 
         <header>
         <div className = "navbar_container">

                <div className="left_container">
                     <div className = "bar">
                         <span></span>
                         <span></span>
                         <span></span>
                     </div> 

                <div className = "list">
                <Link to = "/"><div className = "image">
               <img src = "https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"/>
                       </div ></Link>

                        <ul>
                           <Link to="/Tv"><li style = {{color : "white"}}>TV
                                {/* <ul>
                                    <li>Other shows</li>
                                    <li>Hotstar specials</li>
                                    <li>Quix</li>
                                    <li>Star jalsha</li>
                                    <li>Star Plus</li>
                                    <li>Star Vijaya</li>
                                    <li>Star Bharat</li>
                                    <li>more..</li>
                                </ul> */}
                            </li></Link>
                            <Link to = "/Movies"><li style = {{color : "white"}}>Movies
                            {/* <ul>
                                    <li>Hindi</li>
                                    <li>Bangali</li>
                                    <li>Telgu</li>
                                    <li>Malyalum</li>
                                    <li>Tamil</li>
                                    <li>Marathi</li>
                                    <li>English</li>
                                    <li>Kannada</li>
                                </ul> */}
                            </li></Link>
                            <Link to = "/Sports"><li style = {{color : "white"}}>Sports
                                {/* <ul>
                                    <li>Cricket</li>
                                    <li>Football</li>
                                    <li>Hockey</li>
                                    <li>kabbadi</li>
                                    <li>tennis</li>
                                    <li>Martial art</li>
                                    <li>Athelitic</li>
                                    <li>Golf</li>
                                </ul> */}
                            </li></Link>

                            <Link to = "/Disney"><li style = {{color : "white"}}>Disney+</li></Link>

                            <Link to = "/Kids"><li style = {{color : "coral"}}>KiDS</li></Link>
                          
                        </ul>
                       
                     </div>
                </div>
               
<div className="right_container">
     
<div id = "search">
      <div className = "search-box">
          <form onSubmit={(e)=>{e.preventDefault()}}>
           <input onChange = {handleChange} className = "search-text"  type = "text" name = "" placeholder = "Search"/>
          <input className = "search-btn" type = "submit" value = "Search" placeholder = ""/>
           </form>
           {/* <Search item = {list}/> */}

         {/* <a className = "search-btn" href = "#">
            <i class="fas fa-search"></i>
          </a> */}
      </div> 
    </div> 

    <button className= "upgarde">  <Link to={'/subscription'} > UPGRADE</Link>  </button>
     <Link to = "/Login"><button style = {{color : "white"}} className="user"><i id = "user_icon" class="fa-regular fa-circle-user"></i>Login</button></Link>
     {/* <Button/> */}
</div>


</div>
             
</header>  
     )
 }