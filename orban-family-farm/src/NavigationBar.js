import React from "react";
import { Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div>
      <Tabs>
        <Link to="/home">
          <Tab label="Home" />
        </Link>
      </Tabs>
    </div>
  );
}

export default NavigationBar;
