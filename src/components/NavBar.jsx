import React from "react";
import { Button, Card, Divider, Link } from "@geist-ui/react";
import { Moon, Sun } from "@geist-ui/react-icons";

// this will need some work

const NavBar = ({ themeSwitcher, themeType }) => (
  <header>
    <div style={{ display: "flex" }}>
      <Link>
        <Card style={{ margin: 10 }}>
          <h4> The Linux Quiz </h4>
        </Card>
      </Link>
      <Button
        auto
        style={{ marginRight: 10, marginLeft: "auto", marginTop: 16 }}
        onClick={themeSwitcher}
      >
        <div style={{ marginTop: 6 }}>
          {themeType === "light" ? <Moon /> : <Sun />}
        </div>
      </Button>
    </div>
    <Divider />
  </header>
);

export default NavBar;
