import "./SingleCarousel.css" ; 
import Slider from "react-slick" ; 
import 'slick-carousel/slick/slick.css' ;
import "slick-carousel/slick/slick-theme.css" ;
import {useState,useEffect} from "react" ; 
import axios from "axios" ; 
export const SingleCarousel = ()=>{ 
    const [data , setData]  = useState([
        {
            "images" : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4621/1114621-h-9781e2d5b694" 

        },
        {
            "images" : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2707/1162707-h-4d3d90913d6f" 
            
        },
        {
            "images" : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2180/1122180-h-0046ac044aa6" 
            
        },
        {
            "images" : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9449/1109449-h-01dd6c588fb3" 
            
        },
        {
            "images" : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2937/1092937-h-c5a68e3db9f9" 
            
        },
        {
            "images" : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5603/1145603-h-3038c1e973f7" 
            
        },
        {
            "images" : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4226/1084226-h-7c2d08d39e53" 
            
        }
      
    ]) ;
    // console.log(data);

    // useEffect(()=>{
    //    axios.get("https://disney-hotstar-07.herokuapp.com/tv").then((res)=>{
    //          setData([...res.data])
            
    //      })
    // },[]) 

    return(
        <div style = {{margin : "30px" }}>
           <Slider autoplay={true} autoplaySpeed = {2000} dots = {true} initialSlide = {3} infinite={true}>
                  {
                    data.map(item=>(
                        <div>
                        <img src = {item.images}  alt = "" style = {{width : "100%" , height : "75vh"}}/>
                    </div> 
                    ))
                }
           </Slider>
        </div>
    )
}