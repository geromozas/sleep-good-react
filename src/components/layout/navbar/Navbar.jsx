import "./Navbar.css";
import { Button } from "@mui/material";
import { CartWidget } from "../../common/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img
            className="logoimg"
            src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1685835033/sleep-good/logo-almohada_nyc2sk.png"
            alt="Logo"
            width={300}
            style={{ padding: "20px" }}
          />
        </Link>
        <ul className="categorias">
          <Link to="/">
            <Button className="buttonNav" color="inherit" variant="contained">
              TODAS
            </Button>
          </Link>
          <Link to="/category/combos">
            <Button className="buttonNav" color="inherit" variant="contained">
              COMBOS
            </Button>
          </Link>
          <Link to="/category/familiares">
            <Button className="buttonNav" color="inherit" variant="contained">
              FAMILIARES
            </Button>
          </Link>
          <Link to="/category/hoteleras">
            <Button className="buttonNav" color="inherit" variant="contained">
              HOTELERAS
            </Button>
          </Link>
          <Link to="/category/inteligentes">
            <Button className="buttonNav" color="inherit" variant="contained">
              INTELIGENTES
            </Button>
          </Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
