import React from "react";
import {
  Button,
  Divider,
  Grid,
  Link,
  Text,
  Tooltip,
  Spacer,
} from "@geist-ui/react";
import { Moon, Sun, Github } from "@geist-ui/react-icons";

// the links are not centered
// can someone who knows what they're doing help me out?

const NavBar = ({ children, themeSwitcher, themeType }) => (
  <header>
    <Spacer h={1} />
    <div style={{ marginRight: 10, marginLeft: 10 }}>
      <Grid.Container justify="space-between">
        <Grid>
          <Link>
            <Text h4> The Linux Quiz </Text>
          </Link>
        </Grid>
        <Grid>{children}</Grid>
        <Grid>
          <Tooltip placement="bottom" text="Fork us!">
            <Link
              target="_blank"
              href="https://github.com/chand1012/thelinuxquiz"
            >
              <Github />
            </Link>
          </Tooltip>
          <Button style={{ marginLeft: 10 }} auto onClick={themeSwitcher}>
            <div style={{ marginTop: 6 }}>
              {themeType === "light" ? <Moon /> : <Sun />}
            </div>
          </Button>
        </Grid>
      </Grid.Container>
    </div>
    <Divider />
  </header>
);

export default NavBar;
