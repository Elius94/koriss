import React from "react";
import { Theme } from "@mui/material/styles";
import { WithStyles } from '@mui/styles';
import withStyles from '@mui/styles/withStyles';
import createStyles from '@mui/styles/createStyles';
import MuiTypography, { TypographyProps } from "@mui/material/Typography";

const markSyleMapping: {
  [index: string]: { [subindex: string]: string };
} = {
  center: {
    h1: "",
    h2: "markedH2Center",
    h3: "markedH3Center",
    h4: "markedH4Center",
    h5: "",
    h6: "",
  },
  left: {
    h1: "",
    h2: "",
    h3: "",
    h4: "",
    h5: "",
    h6: "markedH6Left",
  },
  none: {
    h1: "",
    h2: "",
    h3: "",
    h4: "",
    h5: "",
    h6: "",
  },
};

const styles = (theme: Theme) =>
  createStyles({
    [markSyleMapping["center"]["h2"]]: {
      height: 4,
      width: 73,
      display: "block",
      margin: `${theme.spacing(1)} auto 0`,
      backgroundColor: theme.palette.secondary.main,
    },
    [markSyleMapping["center"]["h3"]]: {
      height: 4,
      width: 55,
      display: "block",
      margin: `${theme.spacing(1)} auto 0`,
      backgroundColor: theme.palette.secondary.main,
    },
    [markSyleMapping["center"]["h4"]]: {
      height: 4,
      width: 55,
      display: "block",
      margin: `${theme.spacing(1)} auto 0`,
      backgroundColor: theme.palette.secondary.main,
    },
    [markSyleMapping["left"]["h6"]]: {
      height: 2,
      width: 28,
      display: "block",
      marginTop: theme.spacing(0.5),
      background: "currentColor",
    },
  });

interface ExtraTypographyProps {
  marked?: "center" | "left" | "none";
}

const variantMapping = {
  h1: "h1",
  h2: "h1",
  h3: "h1",
  h4: "h1",
  h5: "h3",
  h6: "h2",
  subtitle1: "h3",
};

function Typography<C extends React.ElementType>(
  props: TypographyProps<C, { component?: C }> &
    WithStyles<typeof styles> &
    ExtraTypographyProps
) {
  const { children, variant, classes, marked = "none", ...other } = props;

  let markedClassName = "";
  if (variant && variant in markSyleMapping[marked]) {
    markedClassName = classes[markSyleMapping[marked][variant]];
  }

  return (
    <MuiTypography variantMapping={variantMapping} variant={variant} {...other}>
      {children}
      {markedClassName ? <span className={markedClassName} /> : null}
    </MuiTypography>
  );
}

export default withStyles(styles)(Typography);
