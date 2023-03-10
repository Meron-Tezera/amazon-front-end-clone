import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import { Link } from "@mui/material";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
// import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__serachIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "./Login"} className="header__clearlink">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header_optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header__clearlink">
          <div className="header__option">
            <span className="header_optionLineOne"> Returns </span>
            <span className="header_optionLineTwo"> & Ordesr </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header_optionLineOne"> Your </span>
          <span className="header_optionLineTwo"> Prime </span>
        </div>
        <Link to="/checkout" className="header__clearlink">
          <div className="optionBasket__Icon">
            <ShoppingBasketIcon />
            <span className="header__optionalLineTwo  header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
