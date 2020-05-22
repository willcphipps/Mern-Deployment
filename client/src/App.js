import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Router, Link} from "@reach/router";
import Form from './components/Form';
import Pets from './components/Pets';
import Edit from './components/Edit';
import Pet from './components/Pet';


function App() {
    const [active, setActive] = useState("/")
  return (
    <div className="App">
          <ul className="nav nav-tabs mb-5">
      <li className="nav-item" onClick={e => setActive("/")} >
        <Link className={ active === "/" ? "nav-link active" : "nav-link" } to="/">Home</Link>
      </li>
      <li className="nav-item" onClick={e => setActive("/new")}>
        <Link className={ active === "/new" ? "nav-link active" : "nav-link" } to="/new">New Pet</Link>
      </li>
    </ul>
      <Router>
        <Form path="/new" />
        <Pets path="/" />
        <Pet path="/:id" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
