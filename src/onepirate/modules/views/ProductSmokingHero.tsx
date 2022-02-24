import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import { Link as RouterLink } from "react-router-dom";

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 9,
      }}
    >
      <Button
        component={RouterLink}
        to="/contattami/"
        sx={{
          border: "4px solid currentColor",
          borderRadius: 0,
          height: "auto",
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          Qualche domanda? Pensi di aver bisogno di aiuto?
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        Contattami ed cercheremo la soluzione per te.
      </Typography>
      <Box
        component="img"
        src="/producBuoy.svg"
        alt="buoy"
        sx={{ width: 60 }}
      />
    </Container>
  );
}

export default ProductSmokingHero;
