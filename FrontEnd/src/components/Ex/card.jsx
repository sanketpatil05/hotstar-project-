 
import "./card.css" ; 
export const Card = ({item})=>{ 
      //console.log({item});
    return (
        <div style = {{margin:"5px" , textAlign : "center"  , color : "white" }} className="card_div">
           <img  className = "image_multi" src = {item.poster} style = {{ borderRadius : "10px",width : "90%" , height : "30vh",}}/>
        </div>
    )
}




