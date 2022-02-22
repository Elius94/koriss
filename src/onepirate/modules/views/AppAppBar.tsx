import React from "react";
import clsx from "clsx";
import { Theme } from "@mui/material/styles";
import withStyles from '@mui/styles/withStyles';
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { AppBarProps } from "@mui/material";

import { WithStyles } from '@mui/styles';

const styles = (theme: Theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props: WithStyles<typeof styles> & AppBarProps) {
  const { classes } = props;
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            component={RouterLink}
            to="/"
          >
            {"Martina Muzzi Psicologa"}
          </Link>
          <div className={classes.right}>
            {location.pathname === "/contattami/" ? (
              <Link
                variant="h6"
                underline="none"
                className={clsx(classes.rightLink, classes.linkSecondary)}
                component={RouterLink}
                to="/"
              >
                {"Home"}
              </Link>
            ) : (
              <Link
                variant="h6"
                underline="none"
                className={clsx(classes.rightLink, classes.linkSecondary)}
                component={RouterLink}
                to="/contattami/"
              >
                {"Contattami"}
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

export default withStyles(styles)(AppAppBar);
