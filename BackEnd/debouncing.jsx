import { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Show } from "./Components/Show";

function App() {
  const [arr, setArr] = useState([]);


  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 2000);
    };
  };

  const handle = (e) => {
    const { value } = e.target;

    axios
      .get(`http://www.omdbapi.com/?i=tt3896198&apikey=[]&s=${value}`)
      .then(({ data }) => setArr(data.Search));
  };

  const optimzedVersion = useCallback(debounce(handle), []);

  return (
    <div className="App">
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter here"
        onChange={optimzedVersion}
      />

      {arr?.length > 0 && (
        <div>
          {arr?.map((el) => {
            return (
              <div className="le" key={el.imdbID}>
                <h3>{el.Title}</h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
