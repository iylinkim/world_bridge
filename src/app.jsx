import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./app.css";
import Picture from "./components/Picture";

function App() {
  const [pictures, setPictures] = useState([]);
  const [num, setNum] = useState(0);

  const getPictures = async () => {
    const query = "famous bridge";
    const response = await axios(
      `https://api.unsplash.com/photos/random?query=${query}&count=30&client_id=${process.env.REACT_APP_API_KEY}`
    );
    return response;
  };

  const getRandomNum = (count) => {
    const random = Math.floor(Math.random() * count);
    return random;
  };

  const loadPictures = useCallback(async () => {
    await getPictures().then((result) => {
      let pics = result.data;
      pics = pics.filter(
        (pic) => pic.location.name !== null && pic.location.urls !== null
      );
      setPictures(pics);
      setNum(getRandomNum(pics.length));
    });
  });

  const onClick = () => {
    loadPictures();
  };

  useEffect(() => {
    loadPictures();
  }, []);

  return (
    <div id="wrap">
      <header id="header">
        <h1 className="logo">
          <span className="logoImg">
            <img src="/images/bridge.png" alt="bridge icon" />
          </span>
          <span>World bridges</span>
        </h1>
      </header>
      {pictures.length > 0 && <Picture picture={pictures[num]} />}
      <button className="button" onClick={onClick}>
        Explore bridges of the world!
      </button>
      {pictures.length > 0 && <button>true</button>}
    </div>
  );
}

export default App;
