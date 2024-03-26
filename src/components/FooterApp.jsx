import "../css/FooterApp.css";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

function FooterApp() {
  return (
    <div className="contenedor2 d-flex flex-column">
      <footer className="py-1 mt-auto d-flex flex-wrap justify-content-between align-items-center border-top color w-100">
        <div className="col-md-3 d-none d-md-flex align-items-center text-center mx-auto">
          <span className="mb-3 mb-md-0 text-white mt-3 mb-2">
            ZetaDev © 2024
          </span>
        </div>
        <div className="col-md-3 d-none d-md-flex align-items-center text-center mx-auto">
          <h6 className="mb-3 mb-md-0 text-white mt-2 text-center">
            Mundo Profesional 2024
          </h6>
        </div>
        <ul className="nav col-md-3 justify-content-end d-flex mx-auto">
          <li className="ms-3">
            <Link to="#">
              <FaFacebookSquare size="30" className="text-white" />
            </Link>
          </li>
          <li className="ms-3">
            <Link to="#">
              <FaSquareInstagram size="30" className="text-white" />
            </Link>
          </li>
          <li className="ms-3">
            <Link to="#">
              <FaTwitterSquare size="30" className="text-white" />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default FooterApp;
