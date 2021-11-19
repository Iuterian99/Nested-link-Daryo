import { Link } from "react-router-dom";

import bayden from "../../img/bayden.jpg";
import bmt from "../../img/bmt.jpg";
import tolibon from "../../img/tolibon.jpg";
import trump from "../../img/trump.jpg";

function JahonAmerika() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ul className="today-list list-unstyled d-flex justify-content-around flex-wrap">
            <li className="today-item mt-3">
              <img
                className="d-block mb-2"
                src={bayden}
                alt="bayden img"
                width="200"
                height="200"
              />
              <Link className="" to="/bayden">
                <p
                  style={{
                    width: "250px",
                  }}
                >
                  Jo Baydenning reytingi rekord darajada pasayib ketdi
                </p>
              </Link>
            </li>
            <li className="today-item mt-3">
              <img
                className="d-block mb-2"
                src={bmt}
                alt="afg`on img"
                width="200"
                height="200"
              />
              <Link className="" to="/bmt">
                <p
                  style={{
                    width: "250px",
                  }}
                >
                  BMT: Afg‘onistondagi inqiroz terrorizm va narkotrafikning
                  ortishi bilan tobora tahdid solmoqda
                </p>
              </Link>
            </li>
            <li className="today-item mt-3">
              <img
                className="d-block mb-2"
                src={tolibon}
                alt="tolibon img"
                width="200"
                height="200"
              />
              <Link className="" to="/tolibon">
                <p
                  style={{
                    width: "250px",
                  }}
                >
                  “Tolibon” AQShdan Afg‘onistonga tegishli mablag‘larni blokdan
                  chiqarishni so‘radi
                </p>
              </Link>
            </li>
            <li className="today-item mt-3">
              <img
                className="d-block mb-2"
                src={trump}
                alt="trump img"
                width="200"
                height="200"
              />
              <Link className="" to="/trump">
                <p
                  style={{
                    width: "250px",
                  }}
                >
                  WSJ: Donald Trampga tegishli mehmonxona 375 mln dollarga
                  sotilmoqda
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JahonAmerika;
