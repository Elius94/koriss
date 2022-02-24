import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import { Link as RouterLink } from "react-router-dom";

const backgroundImage = "./EL_03344.jpg";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      bgImage={backgroundImage}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Dott.ssa Martina Muzzi
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        <b>Psicologa</b> specializzata in psicologia genitoriale e familiare.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component={RouterLink}
        to="/contattami/"
        sx={{ minWidth: 200 }}
      >
        Contattami
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Scopri le mie offerte
      </Typography>
    </ProductHeroLayout>
  );
}
