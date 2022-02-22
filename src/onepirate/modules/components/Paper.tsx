import React from "react";
import clsx from "clsx";
import MuiPaper, { PaperProps } from "@mui/material/Paper";
import { Theme } from "@mui/material/styles";

import { WithStyles } from '@mui/styles';
import withStyles from '@mui/styles/withStyles';

const backgroundStyleMapping = {
  light: "backgroundLight",
  main: "backgroundMain",
  dark: "backgroundDark",
};

const styles = (theme: Theme) => ({
  [backgroundStyleMapping["light"]]: {
    backgroundColor: theme.palette.secondary.light,
  },
  [backgroundStyleMapping["main"]]: {
    backgroundColor: theme.palette.secondary.main,
  },
  [backgroundStyleMapping["dark"]]: {
    backgroundColor: theme.palette.secondary.dark,
  },
  padding: {
    padding: theme.spacing(1),
  },
});

interface ExtraPaperProps {
  background: "light" | "main" | "dark";
  padding?: boolean;
}

function Paper(
  props: PaperProps & ExtraPaperProps & WithStyles<typeof styles>
) {
  const { background, classes, className, padding, ...other } = props;

  return (
    <MuiPaper
      elevation={0}
      square
      className={clsx(
        classes[backgroundStyleMapping[background]],
        {
          [classes.padding]: !!padding,
        },
        className
      )}
      {...other}
    />
  );
}

export default withStyles(styles)(Paper);
