import axios from "axios";
import { useEffect, useState } from "react";
import "./app.css";
import Picture from "./components/Picture";

function App() {
  console.log("render app");

  const [pictures, setPictures] = useState();
  const [num, setNum] = useState();

  const getPictures = async () => {
    const query = "on the bridge";
    const response = await axios(
      `https://api.unsplash.com/photos/random?query=${query}&count=30&client_id=${process.env.REACT_APP_API_KEY}`
    );
    return response;
  };

  const getRandomNum = () => {
    const random = Math.floor(Math.random() * 29);
    return random;
  };

  const onClick = () => {
    setNum(getRandomNum());
  }

  useEffect(() => {
    setNum(getRandomNum());
  }, []);

  useEffect(() => {
    getPictures().then((data) => setPictures(data.data));
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
      {pictures && <Picture picture={pictures[num]} />}
      <button className="button" onClick={onClick}>
        Explore bridges of the world!
      </button>
    </div>
  );
}

export default App;
