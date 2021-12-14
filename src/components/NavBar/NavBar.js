import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";  
import { Refresh } from "@material-ui/icons";


const NavBar = (props) => {
  const [value, setValue] = useState(0);

  
  const handleChange = (_e, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };



  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" index={0} href="/"  />
        <Tab label="Favorites" index={1} href="/Favorites"  />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
