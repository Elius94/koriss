import React from "react";
import { Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Iubenda from 'react-iubenda-policy'
import { Gavel, LinkedIn } from "@material-ui/icons";

function Copyright() {
  return (
    <React.Fragment>
      {"© Martina Muzzi "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: "flex",
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

export default function AppFooter() {
  const classes = useStyles();
  const myPolicy = 70817588

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="https://it.linkedin.com/in/martina-muzzi-a80a94227" className={classes.icon}>
                  <LinkedIn color="action"/>
                </a>
                <a
                  href="https://www.ordinepsicologier.it/it/albo/10319a-martina-muzzi"
                  className={classes.icon}
                >
                  <Gavel color="action"/>
                </a>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Iubenda id={myPolicy} type='privacy' styling='white'>
                  Privacy Policy
                </Iubenda>
              </li>
              <li className={classes.listItem}>
                <Iubenda id={myPolicy} type='cookie' styling='black'>
                  Cookie Policy
                </Iubenda>
              </li>
              <li className={classes.listItem}>
                <Link href="#" className="iubenda-cs-preferences-link">Aggiorna le tue preferenze</Link>
              </li>
            </ul>
          </Grid>
          <Grid item>
            <Typography variant="h6" marked="left" gutterBottom>
              Riferimenti
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Studio Milò, in via delle Rimembranze 9, San Lazzaro (BO)
            </Typography>
            {/*<Typography variant="subtitle1" color="textSecondary">
              P.IVA 02398410001
            </Typography>*/}
            <Typography variant="subtitle1" color="textSecondary">
              Tel. 
              <Link href="tel:+393347156936">
                3347156936
              </Link>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Email: 
              <Link href="mailto:info@martinamuzzipsicologa.it">
                info@martinamuzzipsicologa.it
              </Link>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Iscritta all'
              <Link href="https://www.ordinepsicologier.it/it/albo/10319a-martina-muzzi">
                Ordine degli Psicologi
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {"Icons made by "}
              <Link
                href="https://www.freepik.com"
                rel="sponsored"
                title="Freepik"
              >
                Freepik
              </Link>
              {" from "}
              <Link
                href="https://www.flaticon.com"
                rel="sponsored"
                title="Flaticon"
              >
                www.flaticon.com
              </Link>
              {" is licensed by "}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
