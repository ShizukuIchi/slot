import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";
import MainPage from "./MainPage";
import SlotPage from "./SlotPage";

class App extends React.Component {
  state = {
    region: "大安",
    price: 200,
    category: "XiCan",
    time: "dinner"
  };
  render() {
    return (
      <Router>
        <div className="page-container">
          <Route path="/" exact component={MainPage} />
          <Route path="/slot" component={SlotPage} />
        </div>
      </Router>
    );
  }
}
const Slot = () => <div>slot</div>;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
