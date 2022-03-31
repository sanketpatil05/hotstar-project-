 import { useState , useEffect } from "react"
 import axios from "axios"
 import { Card } from "../CardFolder/Card";
 import { Box, Grid, Typography } from "@mui/material"


export const Home = ()=>{
    const [data, setdata] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8080/trandingMovies").then((res)=>{
        console.log(res.data)
        setdata([...data,...res.data])
      }).catch((e)=>{
          console.log(e)
      })    
      
    }, []);

   

    return (
    <div>
      <Typography variant="h5" mt={5} mx={{textAlign:"left" ,marginBottom:"15px" , marginLeft: "35px", fontWeight:"Bold" , color:"white" } }  >Latest & Trending</Typography>
      <Grid container spacing={2} mx={{marginLeft: "30px"}}>
      
  {data.map((item)=>{
  
      return <Card key={item.id} item={item}/>
  })}
</Grid>
</div>
 

    )
 

}