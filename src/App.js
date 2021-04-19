import react from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App(props) {
  return (
    <div className="App">
      <div>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* <Route exact path="/products" component={ProductList} />
        <Route path="/products/:id" component={Product} /> */}
      </Switch>
    </div>
  );
}

export default App;
