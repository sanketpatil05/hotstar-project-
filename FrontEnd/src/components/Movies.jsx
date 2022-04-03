import {SingleCarousel} from "./SingleCarousel"
import { useState , useEffect } from "react"
import axios from "axios"
import { Card } from "./Cards";
import { MultiCarousel } from "./MultiCarousel";

export const Movies = ()=>{ 
    const section = ["Latest & Trending" , "Action Movies" , "Comedy Movies" , "Thriller" , "Drama Movies" , "Best Sports" ,"Loved by Cricket"] ; 
      const [data, setdata] = useState([]);  
  
      useEffect(() => {
        axios.get("https://disney-hotstar-07.herokuapp.com/tv").then((res)=>{
          console.log(res.data)
          setdata([...data,...res.data])
        }).catch((e)=>{
            console.log(e)
        })    
        
      }, []); 
      
  return (
    <div>
      <SingleCarousel/> 
      {section.map((e)=> (
          <div>  
             <p style = {{ marginLeft : "30px" ,color : "white" , fontWeight : "Bolder" , fontSize : "20px"}}>{e}</p>
             
            <MultiCarousel  item = {data.map((item)=>{
             return <Card key={item.id}  section = {e} item={item}/>  })}/>
        </div> 
      )
      )}
  </div>
     )
   }