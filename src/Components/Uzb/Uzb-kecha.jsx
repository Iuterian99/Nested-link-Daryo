import { Link } from "react-router-dom";

import qor from "../../img/qor.jpg";
import samalyot from "../../img/samalyot.jpg";
import president from "../../img/president.jpg";
import tel from "../../img/tel.jpg";

function UzbKecha() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ul className="today-list list-unstyled d-flex justify-content-around flex-wrap">
            <li className="today-item mt-3">
              <img
                className="d-block mb-2"
                src={qor}
                alt="qor img"
                width="200"
                height="200"
              />
              <Link className="" to="/qor">
                <p
                  style={{
                    width: "250px",
                  }}
                >
                  Birinchi qordan bo‘sa olayotgan qiz, talabalar kuni
                  nishonlangan bitiruv kechasi, zaharli havo bilan qoplangan
                  shahar. 17-noyabr suratlari
                </p>
              </Link>
            </li>
            <li className="today-item mt-3">
              <img
                className="d-block mb-2"
                src={samalyot}
                alt="samalyot img"
                width="200"
                height="200"
              />
              <Link className="" to="/samalyot">
                <p
                  style={{
                    width: "250px",
                  }}
                >
                  Uzbekistan Airports Toshkent aeroportidan uchishi kerak
                  bo‘lgan reyslarning kechiktirilishi to‘g‘risida ma’lumot berdi
                </p>
              </Link>
            </li>
            <li className="today-item mt-3">
              <img
                className="d-block mb-2"
                src={president}
                alt="president img"
                width="200"
                height="200"
              />
              <Link className="" to="/president">
                <p
                  style={{
                    width: "250px",
                  }}
                >
                  Shavkat Mirziyoyev Rossiyaga jo‘nab ketdi
                </p>
              </Link>
            </li>
            <li className="today-item mt-3">
              <img
                className="d-block mb-2"
                src={tel}
                alt="tel img"
                width="200"
                height="200"
              />
              <Link className="" to="/tel">
                <p
                  style={{
                    width: "250px",
                  }}
                >
                  O‘zbekistonlik talaba yigit Telegram’dagi botini 150 ming
                  dollarga sotdi. Mana uning hikoyasi
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UzbKecha;
