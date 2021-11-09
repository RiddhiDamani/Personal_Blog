import React, { useContext } from "react";
import { ThemeContext } from "../Contexts";
import { Link } from "react-navi";

const Header = ({ text }) => {
  const theme = useContext(ThemeContext);
  return (
    <Link href="/">
      <h1 style={{ color: theme.primaryColor }}>{text}</h1>
    </Link>
  );
};

export default Header;
