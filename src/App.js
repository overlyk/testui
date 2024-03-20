import logo from './logo.svg';
import './App.css';

//import all my components
import {Home} from './Home';
import { Graph } from './Graph';
import  Transaction from './Transaction';

//import stuff from react-router-dom
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';

//root component
function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3"> 
        React JS Frontend
      </h3>

      <nav className="navbar navbar-expand-sm bf-light navbar-dark">
        <ul className="navBar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/hgraph">
              Graph
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/transaction">
              Transaction
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/graph"  element={<Graph />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
