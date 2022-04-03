import { Typography} from "@mui/material";
import Button from '@mui/material/Button';
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect, useState } from "react";

import { useParams } from "react-router";

export const Clickmovies = () => {
  const { id } = useParams();
  const [state, setstate] = useState({});

  useEffect(() => {
    axios.get(`https://disney-hotstar-07.herokuapp.com/sports/${id}`).then((res) => {
      console.log(res);
      setstate({ ...state, ...res.data });
    });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        p: 1,
        height: "400px",
        m: 5,
        border: "1px solid white",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      <Box
        sx={{
          flex: 5,
          background:
            "linear-gradient(to right, #030b17, #25272b)" ,
            zIndex:"10",
            color: "white",
            textAlign:"start",
            p:2,
        }}
      >
   <Typography backgroundColor="transparent" mt={7} fontWeight="bold" variant="h4">{state.title}</Typography>
   <Typography variant="h6" backgroundColor="transparent" mt={1}>{state.time}</Typography>
    <Typography variant="h6" backgroundColor="transparent" mt={1} >{state.discription}</Typography>
    <Box display={"flex"} sx={{justifyContent:"space-between", }} mt={13}> 
    <Button sx={{color:"white" , fontSize:"18px" , fontWeight:"bold" , marginRight:"200px"}}  variant="text"><PlayArrowIcon/> WATCH NOW</Button>
    <Button sx={{color:"white", fontWeight:"bold"}} variant="text" ><AddIcon /> ADD IN WATCHLIST</Button>
    <Button sx={{color:"white",fontWeight:"bold"}} variant="text"  ><ShareIcon/> SHARE</Button>
    </Box>
      </Box>
      <Box sx={{ flex: 6}}>
        <img
          style={{  height: "100%", width: "100%"}}
          src={state.poster}
          alt=""
        />
      </Box>
    </Box>
  );
};
