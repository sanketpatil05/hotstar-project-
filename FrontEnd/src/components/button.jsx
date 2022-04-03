import {useContext} from "react" ; 
import axios from "axios" ; 
import {AuthContext} from "../Context/AuthContext"
export const Button = () => {
    const {isAuth,handlechange} = useContext(AuthContext)
     //console.log(isAuth)

    const myfun = ()=>{
        if(isAuth==true){
            localStorage.clear("ID");
            handlechange()

             return
        } 
        axios
        .post("https://reqres.in/api/login", {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        })
        .then((res) => {
        //  setToken(res.data.token);
         console.log(res.data.token); 
         localStorage.setItem("ID" , res.data.token)
          handlechange()
        })
    }
       return (
           <div>
           <button onClick={()=>{
               myfun() ;
            
           }}>{!isAuth?"Login":"Logout"}</button> 
           
          
    </div>
       )
  }