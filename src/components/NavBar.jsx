import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={55}  style={{paddingLeft:'10px'}}/>
            
      <img className="desktop-only" src='https://pogmogoal.com/wp-content/uploads/messi5.jpg' height={50} width={90} alt="messiLogo" style={{paddingLeft:'15px',}}/>
    
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default NavBar;
