import { Link } from "react-router-dom";
import tiara from "../../img/tiara.jpg";
import hokim from "../../img/hokim.jpg";
import prava from "../../img/prava.jpg";
import yul from "../../img/yul.png";

function UzbBugun() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ul className="today-list list-unstyled d-flex justify-content-around flex-wrap">
            <li className="today-item mt-3">
              <img
                className="d-block mb-2"
                src={tiara}
                alt="Tiara img"
                width="200"
                height="200"
              />
              <Link className="" to="/Tiara">
                <p
                  style={{
                    width: "250px",
                  }}
                >
                  Poytaxtdagi eng noyob loyihalardan biri — Tiara Residence
                  turar joy majmuasining qurilishi yakunlandi
                </p>
              </Link>
            </li>
            <li className="today-item mt-3">
              <img
                className="d-block mb-2"
                src={hokim}
                alt="Tiara img"
                width="200"
                height="200"
              />
              <Link className="" to="/hokim">
                <p
                  style={{
                    width: "250px",
                  }}
                >
                  Zoir Mirzayev Toshkent viloyati hokimi etib tayinlandi
                </p>
              </Link>
            </li>
            <li className="today-item mt-3">
              <img
                className="d-block mb-2"
                src={prava}
                alt="prava img"
                width="200"
                height="200"
              />
              <Link className="" to="/prava">
                <p
                  style={{
                    width: "250px",
                  }}
                >
                  O‘zbekistonda eski haydovchilik guvohnomasini almashtirish
                  muddati 1 yilga uzaytirildi
                </p>
              </Link>
            </li>
            <li className="today-item mt-3">
              <img
                className="d-block mb-2"
                src={yul}
                alt="yul img"
                width="200"
                height="200"
              />
              <Link className="" to="/yul">
                <p
                  style={{
                    width: "250px",
                  }}
                >
                  Nima uchun Shvetsiya yo‘llari jahonda eng xavfsiz? Nega
                  Xelsinkidagi YTHlarda hech kim o‘lmaydi? Nega Osloda
                  haydovchilar piyodalarni bosib ketmaydi?
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UzbBugun;
