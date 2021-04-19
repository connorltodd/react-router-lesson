import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  console.log(props.history);
  return (
    <div>
      Home
      <button
        onClick={() => {
          alert("hello world");
          props.history.push("/about");
        }}
      >
        Show me the about page
      </button>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Home;
