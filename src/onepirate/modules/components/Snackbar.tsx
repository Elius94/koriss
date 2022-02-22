import React from "react";
import { Theme } from "@mui/material/styles";
import { WithStyles } from '@mui/styles';
import withStyles from '@mui/styles/withStyles';
import createStyles from '@mui/styles/createStyles';
import MuiSnackbar, { SnackbarProps } from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";

const styles = (theme: Theme) =>
  createStyles({
    content: {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.text.primary,
      flexWrap: "inherit",
      [theme.breakpoints.up("md")]: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      },
    },
    contentMessage: {
      fontSize: 16,
      display: "flex",
      alignItems: "center",
    },
    contentAction: {
      paddingLeft: theme.spacing(2),
    },
    info: {
      flexShrink: 0,
      marginRight: theme.spacing(2),
    },
    close: {
      padding: theme.spacing(1),
    },
  });

function Transition(props: any) {
  return <Slide {...props} direction="down" />;
}

interface ExtraSnackbarProps {
  closeFunc?: () => void;
}

function Snackbar(
  props: WithStyles<typeof styles> & SnackbarProps & ExtraSnackbarProps
) {
  const { classes, message, closeFunc, ...other } = props;

  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={6000}
      TransitionComponent={Transition}
      ContentProps={{
        classes: {
          root: classes.content,
          message: classes.contentMessage,
          action: classes.contentAction,
        },
      }}
      message={
        <React.Fragment>
          <InfoIcon className={classes.info} />
          <span>{message}</span>
        </React.Fragment>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          className={classes.close}
          onClick={() => closeFunc && closeFunc()}
          size="large">
          <CloseIcon />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

export default withStyles(styles)(Snackbar);
