import React from "react";
import { Theme } from "@mui/material/styles";
import { WithStyles } from '@mui/styles';
import withStyles from '@mui/styles/withStyles';
import createStyles from '@mui/styles/createStyles';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      overflow: "hidden",
      backgroundColor: theme.palette.secondary.light,
    },
    container: {
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(30),
      display: "flex",
      position: "relative",
    },
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(0, 5),
    },
    image: {
      height: 55,
    },
    title: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    curvyLines: {
      pointerEvents: "none",
      position: "absolute",
      top: -180,
    },
  });

function ProductValues(props: WithStyles<typeof styles>) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/productValues1.svg"
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Sostegno psicologico
              </Typography>
              <Typography variant="h5">
                {
                  "È un tipo di intervento rivolto a tutti coloro che vivono un momento di crisi personale o di disagio in differenti ambiti di vita. "
                }
                {
                  "Scopo del sostegno psicologico è quello di sostenere o migliorare la qualità di vita dell’individuo, sviluppando e potenziando i punti di forza e le risorse personali."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/productValues2.svg"
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                Sostegno genitoriale
              </Typography>
              <Typography variant="h5">
                {
                  "È un tipo di intervento rivolto a coloro che affrontano difficoltà nel loro ruolo genitoriale. "
                }
                {
                  "Il percorso di sostegno genitoriale ha lo scopo di a migliorare la relazione e la comunicazione genitori/figli, sostenendo e sviluppando le competenze già presenti all’interno del nucleo familiare."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/productValues3.svg"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Sostegno perinatale
              </Typography>
              <Typography variant="h5">
                {"I cambiamenti sia fisiologici che emotivi che si presentano al momento della gravidanza, del parto e della cura del neonato, possono portare i neo-genitori a vivere la nuova esperienza con difficoltà e vulnerabilità. "}
                {"A questo proposito il sostegno perinatale si occupa di promuovere e sostenere la salute di genitori e figli con un’attenzione specifica al periodo prima e subito dopo la nascita."}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/productValues3.svg"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Corsi di massaggio infantile
              </Typography>
              <Typography variant="h5">
                {"Gli studi sul massaggio infantile mostano come questo abbia numerosi benefici:"}<br />
                <b>{"Interazione"}</b>{": il massaggio favorisce lo sviluppo di un legame sicuro genitore/bambino, il contatto precoce con entrambi i genitori, l’attivazione di tutti i sensi…"}<br />
                <b>{"Stimolazione"}</b>{": il massaggio infantile comporta la stimolazione di sistemi come il sistema immunitario, nervoso, l’apparato digerente, la stimolazione dello sviluppo e del tono muscolare, lo sviluppo del linguaggio…"}<br />
                <b>{"Sollievo"}</b>{": può aiutare nei casi di gas intestinali, coliche, difficoltà di evacuazione"}<br />
                <b>{"Rilassamento"}</b>{": l’utilizzo di tecniche di massaggio può aiutare nel migliorare il sonno, ridurre i livelli di ormoni indicatori dello stress, "}
                {"migliorare la capacità di consolarsi e può portare a benefici sia per i genitori (migliore comprensione del bambino, aumento dell’autostima, "}
                {"aumento degli ormoni del rilassamento…) che per tutta la famiglia (coinvolgimento dei fratelli e della famiglia allargata, migliore qualità del sonno, riduzione dei conflitti)"}<br />
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default withStyles(styles)(ProductValues);
