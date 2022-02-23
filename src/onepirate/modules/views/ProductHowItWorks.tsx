import React from "react";
import { Theme } from "@mui/material/styles";
import { WithStyles } from '@mui/styles';
import withStyles from '@mui/styles/withStyles';
import createStyles from '@mui/styles/createStyles';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import { ButtonBase } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      backgroundColor: theme.palette.secondary.light,
      overflow: "hidden",
    },
    container: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(15),
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      marginBottom: theme.spacing(4),
    },
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(0, 5),
    },
    red: {
      fontSize: 24,
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightMedium,
    },
    profilePic: {
      height: 500,
      zIndex: 1,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    curvyLines: {
      pointerEvents: "none",
      position: "absolute",
      top: -180,
      opacity: 0.7,
    },
    button: {
      marginTop: theme.spacing(8),
    },
    imageWrapper: {
      position: "relative",
      display: "block",
      padding: 0,
      borderRadius: 0,
      height: "40vh",
      [theme.breakpoints.down('xl')]: {
        width: "100% !important",
        height: 100,
      },
      "&:hover": {
        zIndex: 1,
      },
      "&:hover $imageBackdrop": {
        opacity: 0.15,
      },
      "&:hover $imageMarked": {
        opacity: 0,
      },
      "&:hover $imageTitle": {
        border: "4px solid currentColor",
      },
    },
    imageButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%",
    },
    imageBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: theme.palette.common.black,
      opacity: 0.5,
      transition: theme.transitions.create("opacity"),
    },
    imageTitle: {
      position: "relative",
      padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      background: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 9px)",
      transition: theme.transitions.create("opacity"),
    },
  });

function ProductHowItWorks(props: WithStyles<typeof styles>) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          Chi sono?
        </Typography>
        <div className={classes.item}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <ButtonBase
                key={"Martina"}
                className={classes.imageWrapper}
                style={{
                  width: "100%",
                }}
              >
                <div
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(/DSC_0655.JPG)`,
                  }}
                />
                <div className={classes.imageBackdrop} />
                <div className={classes.imageButton}>
                  <Typography
                    component="h3"
                    variant="h6"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {"Martina"}
                    <div className={classes.imageMarked} />
                  </Typography>
                </div>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.red}>Mi presento.</div>
              <Typography variant="h5">
                {"Sono la dott.ssa Martina Muzzi, psicologa laureata al corso di laurea Psicologia Scolastica e di Comunità dell’università di Bologna, e abilitata all’ordine degli psicologi dell’Emilia-Romagna. "}
                {"I miei studi e le esperienze, sia universitarie che successive, si sono concentrate in particolare sulle tematiche relative all’infanzia (orientamento e psicologia scolastica, disturbi dell’apprendimento, "}
                {"psicologia clinica dello sviluppo) e quelle erelative alla genitorialità."}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}
export default withStyles(styles)(ProductHowItWorks);
