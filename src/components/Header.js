import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));
const style = {
  background: "#F50057",
  margin: "0 0 40px 0"
};

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={style}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Recipe Search App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
