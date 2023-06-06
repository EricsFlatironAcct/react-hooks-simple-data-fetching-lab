// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    image: "",
  });
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          error: false,
          isLoaded: true,
          image: data.message,
        });
      });
  }, []);
  if (state.error) return <div>state.error.message</div>;
  if (!state.isLoaded) return <p>Loading...</p>;
  return <img src={state.image} alt="A Random Dog"></img>;
}

export default App;
