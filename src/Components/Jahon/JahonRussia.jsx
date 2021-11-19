import { Link } from "react-router-dom";
import aktyor from "../../img/aktyor.jpg";
import nasha from "../../img/nasha.jpg";
import madonna from "../../img/madonna.jpg";
import zelenskiy from "../../img/zelenskiy.jpg";

function JahonRussia() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ul className="today-list list-unstyled d-flex justify-content-around flex-wrap">
            <li className="today-item mt-3">
              <img
                className="d-block mb-2"
                src={aktyor}
                alt="aktyor img"
                width="200"
                height="200"
              />
              <Link className="" to="/aktyor">
                <p
                  style={{
                    width: "250px",
                  }}
                >
                  Rossiyaning mashhur Artik & Asti guruhi a’zolari ajralishga
                  qaror qildi. Asti taxallusi bilan ma’lum bo‘lgan Anna endi
                  yakkaxon ijod qiladi
                </p>
              </Link>
            </li>
            <li className="today-item mt-3">
              <img
                className="d-block mb-2"
                src={nasha}
                alt="nasha img"
                width="200"
                height="200"
              />
              <Link className="" to="/nasha">
                <p
                  style={{
                    width: "250px",
                  }}
                >
                  “Nasha Russia” shousi aktyorlarining rafiqalari qanday
                  ko‘rinishga ega?
                </p>
              </Link>
            </li>
            <li className="today-item mt-3">
              <img
                className="d-block mb-2"
                src={madonna}
                alt="madonna img"
                width="200"
                height="200"
              />
              <Link className="" to="/madonna">
                <p
                  style={{
                    width: "250px",
                  }}
                >
                  Madonna, Ledi Gaga, Deniel Redkliff va past bo‘yli boshqa
                  yulduzlar
                </p>
              </Link>
            </li>
            <li className="today-item mt-3">
              <img
                className="d-block mb-2"
                src={zelenskiy}
                alt="zelenskiy img"
                width="200"
                height="200"
              />
              <Link className="" to="/zelenskiy">
                <p
                  style={{
                    width: "250px",
                  }}
                >
                  Zelenskiy Rossiya maxsus xizmatlarining 28 nafar xodimiga
                  qarshi sanksiyalar e’lon qildi
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JahonRussia;
