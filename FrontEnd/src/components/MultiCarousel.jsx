import "./SingleCarousel.css" ; 
import Slider from "react-slick" ; 
import 'slick-carousel/slick/slick.css' ;
import "slick-carousel/slick/slick-theme.css" ;
import {useState,useEffect} from "react" ; 
import axios from "axios" ; 
//  import {Card} from "./card" 
 import {Card} from "./Cards"


export const MultiCarousel = ({item})=>{ 
    // const [data , setData]  = useState([]) ;
    //  console.log(data);

    // useEffect(()=>{
    //    axios.get("http://localhost:3001/trandingMovies").then((res)=>{
    //          setData([...res.data])
    //      })
    // },[]) 

    return(
        <div style = {{margin : "30px" }}>
           <Slider autoplay={false} autoplaySpeed = {1000} initialSlide = {1} infinite={true}
                 slidesToShow={7} slidesToScroll={7} 
                //  infinite = {false}
           >
                {/* {
                    data.map((item)=>(
                    //  <div>
                    //     <img src = {item.images}  alt = "" style = {{width : "100%" , height : "35vh"}}/>
                    // </div>  
                     <Card item = {item}/>
                    ))
                } */} 
                {item}
           </Slider>
        </div>
    )
}