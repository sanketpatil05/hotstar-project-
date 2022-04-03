import { Link } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const Div = styled.div`
  height: 250px;
  width: 180px;
  margin: auto;
  text-align: justify;
  margin-top: 20px;
  border-radius: 10px;
  position: relative;
  background-color: transparent;
  img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    opacity: 1;
    display: block;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
  div {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    padding: 0 10px;
    width: 85%;
    height: 100%;
    color: #c8e2f8;
    font-family: Arial, Helvetica, sans-serif;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  :hover {
    transform: scale(1.2);
    z-index: 999;
    transition: 0.3s ease;
  }
  /* :hover img{
  opacity: 0.5;
} */
  :hover div {
    opacity: 1;
    height: 100%;
    background-color: transparent;
    box-shadow: 0 0 100px 100px #19195288 inset;
    transition: 1s;
  }
  Button {
    margin: 3px;
    line-height: 0;
    padding: 0;
    font-size: 10px;
  }

  p:nth-child(1) {
    margin-top: 60px;
    background-color: transparent;
  }
  p {
    line-height: 10px;
    margin-bottom: 0;
    background-color: transparent;
    font-size: 10px;
  }
`;

export const Card = ({ item,section}) => {
  
  return ( 
    
    <Div>
      <Link to={`/Movies/${item._id}`}>
        <img src={item.poster} alt=""  style = {{ borderRadius : "10px",width : "90%" , height : "35vh",}}/>
        <div>
          <Typography variant="h6" mt={8} mx={{backgroundColor:"transparent"  }} mb={-2}>
            {item.title}
          </Typography>
          <p>{item.time}</p>
          <p>{item.language}</p>
          <p>{item.discription}</p>
          <Button
            variant="contained"
            sx={{
              color: "#c8e2f8",
              transform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Watch Movie
          </Button>
          <Button
            variant="text"
            sx={{
              color: "#c8e2f8",
              transform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Save in watchlist
          </Button>
        </div>
      </Link>
    </Div>
  );
};
