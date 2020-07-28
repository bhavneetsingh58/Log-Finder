import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#262529",
    color: "#4CCF76",
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <div className="navbar-div">
      <AppBar position="absolute" className={classes.header}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Log Finder
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
