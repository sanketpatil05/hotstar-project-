 import { useState , useEffect } from "react"
 import axios from "axios"
 import { Card } from "./Cards";
import { MultiCarousel } from "./MultiCarousel";
import {SingleCarousel} from "./SingleCarousel"

export const Home = ()=>{ 
  const section = ["Latest & TV" , "Latest & Trending" , "Shows" , "Kids" , "Sports"] ; 
    
    const [tv, setTv] = useState([]);  
    const [trending, setTrending] = useState([]); 
    const [show, setShow] = useState([]);  
    const [sport, setSport] = useState([]);  
    const [kids, setKids] = useState([]);  

    useEffect(() => {
      axios.get("https://disney-hotstar-07.herokuapp.com/tv").then((res)=>{
        //console.log(res.data)
        setTv([...tv,...res.data])
      }).catch((e)=>{
          console.log(e)
      })    
      
    }, []); 
    useEffect(() => {
      axios.get("https://disney-hotstar-07.herokuapp.com/trending").then((res)=>{
        // console.log(res.data)
        setTrending([...trending,...res.data])
      }).catch((e)=>{
          console.log(e)
      })    
      
    }, []);
    useEffect(() => {
      axios.get("https://disney-hotstar-07.herokuapp.com/show").then((res)=>{
        // console.log(res.data)
        setShow([...show,...res.data])
      }).catch((e)=>{
          console.log(e)
      })    
      
    }, []);

    useEffect(() => {
      axios.get("https://disney-hotstar-07.herokuapp.com/kids").then((res)=>{
        // console.log(res.data)
        setKids([...kids,...res.data])
      }).catch((e)=>{
          console.log(e)
      })    
      
    }, []);
     useEffect(() => {
      axios.get("https://disney-hotstar-07.herokuapp.com/sports").then((res)=>{
        // console.log(res.data)
        setSport([...sport,...res.data])
      }).catch((e)=>{
          console.log(e)
      })    
      
    }, []);
    
return (
  <div>
    <SingleCarousel/>  
    <div>  
           {/* <p style = {{ marginLeft : "30px" ,color : "white" , fontWeight : "Bolder" , fontSize : "20px"}}>{e}</p> */}
           
          <MultiCarousel  item = {tv.map((item)=>{
           return <Card key={item.id}   item={item}/>  })}/>
      </div>  

      <div>  
           {/* <p style = {{ marginLeft : "30px" ,color : "white" , fontWeight : "Bolder" , fontSize : "20px"}}>{e}</p> */}
           
          <MultiCarousel  item = {trending.map((item)=>{
           return <Card key={item.id}  item={item}/>  })}/>
      </div> 

      <div>  
           {/* <p style = {{ marginLeft : "30px" ,color : "white" , fontWeight : "Bolder" , fontSize : "20px"}}>{e}</p> */}
           
          <MultiCarousel  item = {show.map((item)=>{
           return <Card key={item.id}   item={item}/>  })}/>
      </div> 

      <div>  
           {/* <p style = {{ marginLeft : "30px" ,color : "white" , fontWeight : "Bolder" , fontSize : "20px"}}>{e}</p> */}
           
          <MultiCarousel  item = {sport.map((item)=>{
           return <Card key={item.id}  item={item}/>  })}/>
      </div> 

      <div>  
           {/* <p style = {{ marginLeft : "30px" ,color : "white" , fontWeight : "Bolder" , fontSize : "20px"}}>{e}</p> */}
           
          <MultiCarousel  item = {kids.map((item)=>{
           return <Card key={item.id}  item={item}/>  })}/>
      </div> 
    {/* {section.map((e)=> (
       
    )
    )} */}
</div>
   )
 }