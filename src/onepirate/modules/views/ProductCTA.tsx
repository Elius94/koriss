import React from "react";
import { Theme } from "@mui/material/styles";
import { WithStyles } from '@mui/styles';
import withStyles from '@mui/styles/withStyles';
import createStyles from '@mui/styles/createStyles';
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import TextField from "../components/TextField";
import Snackbar from "../components/Snackbar";
import Button from "../components/Button";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(10),
      marginBottom: 0,
      display: "flex",
    },
    cardWrapper: {
      zIndex: 1,
    },
    card: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: theme.palette.warning.main,
      padding: theme.spacing(8, 3),
    },
    cardContent: {
      maxWidth: 400,
    },
    textField: {
      width: "100%",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
    button: {
      width: "100%",
    },
    imagesWrapper: {
      position: "relative",
    },
    imageDots: {
      position: "absolute",
      top: -67,
      left: -67,
      right: 0,
      bottom: 0,
      width: "100%",
      background: "url(/static/onepirate/productCTAImageDots.png)",
    },
    image: {
      position: "absolute",
      top: -28,
      left: -28,
      right: 0,
      bottom: 0,
      width: "100%",
      maxWidth: 600,
    },
  });

function ProductCTA(props: WithStyles<typeof styles>) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form onSubmit={handleSubmit} className={classes.cardContent}>
              <Typography variant="h2" component="h2" gutterBottom>
                Receive offers
              </Typography>
              <Typography variant="h5">
                Taste the holidays of the everyday close to home.
              </Typography>
              <TextField
                noBorder
                className={classes.textField}
                placeholder="Your email"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className={classes.button}
              >
                Keep me updated
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden xlDown>
            <div className={classes.imageDots} />
            <img
              src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750&q=80"
              alt="call to action"
              className={classes.image}
            />
          </Hidden>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="We will send you our best offers, once a week."
      />
    </Container>
  );
}

export default withStyles(styles)(ProductCTA);
