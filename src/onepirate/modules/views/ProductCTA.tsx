import React from "react";
import { Theme } from "@mui/material/styles";
import { WithStyles } from '@mui/styles';
import withStyles from '@mui/styles/withStyles';
import createStyles from '@mui/styles/createStyles';
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Snackbar from "../components/Snackbar";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

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
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      padding: theme.spacing(1, 5),
    },
    number: {
      fontSize: 24,
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightMedium,
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
    map: {
      width: "100%",
      height: "92%",
    },
  });

function ProductCTA(props: WithStyles<typeof styles>) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);
  const [position/*, setPosition*/] = React.useState<any>([44.46917165365001, 11.40598871506287]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <div className={classes.cardContent}>
              <Typography variant="h2" component="h2" gutterBottom>
                Come ricevo
              </Typography>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <Typography variant="h5">
                  Ricevo presso lo Studio Milò, in via delle Rimembranze 9, San Lazzaro (BO),
                  il <b>mercoledì</b> e il <b>giovedì</b> dalle <b>7:30</b> alle <b>12:30</b>.
                </Typography>
              </div>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <Typography variant="h5">
                  Seduta remota tramite <b>Google Meet</b>.
                </Typography>
              </div>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <Typography variant="h5">
                  Direttamente a <b>domicilio</b>.
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden xlDown>
            <div className={classes.imageDots} />
            <div className={classes.image}>
              <MapContainer center={position} zoom={15} className={classes.map}>
                <TileLayer
                  attribution='&amp;copy <a href="https://www.thunderforest.com/">Thunderforest</a>'
                  url="https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=43d136d38a064b11925be75e32fc86fa"
                />
                <Marker position={position}>
                  <Popup>
                    via delle Rimembranze 9, San Lazzaro (BO).
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
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
