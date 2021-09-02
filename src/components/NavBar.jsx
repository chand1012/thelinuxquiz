import React from "react";
import { Button, Divider, Grid, Link } from "@geist-ui/react";
import { Moon, Sun } from "@geist-ui/react-icons";

// this just needs completely redone

const NavBar = ({ children, themeSwitcher, themeType }) => (
  <header>
    <Grid.Container justify="center" alignContent="stretch">
      <Grid>
        <Link>
          <Button hoverable>
            <h4> The Linux Quiz </h4>
          </Button>
        </Link>
      </Grid>
      <Grid>{children}</Grid>
      <Grid>
        <Button auto onClick={themeSwitcher}>
          <div style={{ marginTop: 6 }}>
            {themeType === "light" ? <Moon /> : <Sun />}
          </div>
        </Button>
      </Grid>
    </Grid.Container>
    <Divider />
  </header>
);

export default NavBar;
