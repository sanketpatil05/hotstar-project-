import "./home.css"
 import {useState,useEffect} from "react" ; 
 import axios from "axios" ; 
export const Home =()=>{ 
     const [data , setData]  = useState() ;
      //console.log(data.images);
     //  useEffect(()=>{
     //     axios.get("http://localhost:3000/data").then((data)=>{
     //          console.log(data);
     //               setData([...data.data])
     //        })
     //  },[])
       
  return( 
   
     <div className = "carousel" data-flickity='{"wrapAround":true,"autoplay":true}'>
      <div className= "carousel-cell">
        <a href = "menu.html"><img className = "image1" 
             src = "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4621/1114621-h-9781e2d5b694"
        /></a>
    </div> 
   
    
    <div className= "carousel-cell">
        <a href = "menu.html"><img className = "image1" 
             src = "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2707/1162707-h-4d3d90913d6f"
        /></a>
    </div>
    
    <div className= "carousel-cell">
        <a href = "menu.html"><img className = "image1" 
             src = "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2180/1122180-h-0046ac044aa6"
        /></a>
    </div>
    <div className= "carousel-cell">
        <a href = "menu.html"><img className = "image1" 
             src = "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/587/860587-h"
        /></a>
    </div>
    <div className= "carousel-cell">
        <a href = "menu.html"><img className = "image1" 
             src = "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9449/1109449-h-01dd6c588fb3"
        /></a>
    </div>
    <div className= "carousel-cell">
        <a href = "menu.html"><img className = "image1" 
             src = "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2937/1092937-h-c5a68e3db9f9"
        /></a>
    </div>
    <div className= "carousel-cell">
          <a href = "menu.html"><img className = "image1" 
               src = "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5603/1145603-h-3038c1e973f7"
          /></a>
    </div>
    <div className= "carousel-cell">
        <a href = "menu.html"><img className = "image1" 
             src = "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4226/1084226-h-7c2d08d39e53"
        /></a>
    </div>
   
    
</div>  

  )
}

