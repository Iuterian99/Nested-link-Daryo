import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, NavLink } from "react-router-dom";

// components

import JahonInfo from "./Components/Jahon/JahonInfo";
import JahonRussia from "./Components/Jahon/JahonRussia";
import JahonAmerika from "./Components/Jahon/JahonAmerika";
import UzbBugun from "./Components/Uzb/UzbBugun";
import UzbKecha from "./Components/Uzb/Uzb-kecha";
import UzbInfo from "./Components/Uzb/UzbInfo";

function App() {
  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col-12">
          <h1 className="h1 mt-3 text-center mb-5 text-warning w-100 bg-white p-3">
            Yangiliklar
          </h1>
          <ul className="list-unstyled d-flex justify-content-around">
            <li className="bg-success">
              <NavLink
                className="d-block mx-auto pt-2 pb-2 ps-5 pe-5 text-center fs-1 text-light"
                activeClassName="bg-danger text-dark"
                to="/uzb"
              >
                Uzb
              </NavLink>
            </li>
            <li className="bg-success">
              <NavLink
                className="d-block mx-auto pt-2 pb-2 ps-5 pe-5 text-center fs-1 text-light"
                activeClassName="bg-danger text-dark"
                to="/jahon"
              >
                Jahon
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Switch>
            <Route path="/uzb">
              <UzbInfo />
            </Route>
            <Route path="/jahon">
              <JahonInfo />
            </Route>
          </Switch>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Switch>
            <Route path="/uzb/bugungi" exact>
              <UzbBugun />
            </Route>
            <Route path="/uzb/kechagi">
              <UzbKecha />
            </Route>
          </Switch>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Switch>
            <Route path="/jahon/russia" exact>
              <JahonRussia />
            </Route>
            <Route path="/jahon/amerika">
              <JahonAmerika />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
