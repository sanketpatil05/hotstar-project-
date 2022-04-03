 import {createContext,useState} from "react" ; 

 export const AuthContext = createContext() ; 

 export const AuthContextProvider = ({children})=>{ 

      const [isAuth , toggleAuth] = useState(localStorage.getItem("ID") || false) 

       const handlechange = ()=>{
            toggleAuth(!isAuth)
       }

           return (
               <AuthContext.Provider value = {{isAuth,handlechange}}>
                       {children}
               </AuthContext.Provider>
           )
 } 

