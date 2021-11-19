import { NavLink } from "react-router-dom";

function JahonInfo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ul className="uzb-list mt-3 list-unstyled d-flex justify-content-center">
            <li className="bg-success me-5">
              <NavLink
                className="d-block p-2 ps-5 pe-5"
                activeClassName="bg-danger text-dark"
                to="/jahon/russia"
              >
                <h1 className="h1">Russia</h1>
              </NavLink>
            </li>
            <li className="bg-success">
              <NavLink
                className="d-block p-2 ps-5 pe-5"
                activeClassName="bg-danger text-dark"
                to="/jahon/amerika"
              >
                <h1 className="h1">Amerika</h1>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JahonInfo;
