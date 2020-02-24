import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Pdslist from "./components/Pdslist";
import Editpd from "./components/Editpd";
import Createpd from "./components/Createpd";
import CreateUser from "./components/Createuser";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Pdslist} />
        <Route path="/edit/:id" component={Editpd} />
        <Route path="/create" component={Createpd} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
