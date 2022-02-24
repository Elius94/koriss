import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import { useEffect, useState } from "react";
import Markdown from "../components/Markdown";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  const [markdownSostegnoPsicologico, setMarkdownSostegnoPsicologico] = useState("");
  const [markdownSostegnoGenitoriale, setMarkdownSostegnoGenitoriale] = useState("");
  const [markdownSostegnoPerinatale, setMarkdownSostegnoPerinatale] = useState("");
  const [markdownCorsiMassaggioInfantile, setMarkdownCorsiMassaggioInfantile] = useState("");

  // https://github.com/webpack/webpack/issues/6680
  useEffect(() => {
    import("./texts/sostegnopsicologico.md")
      .then((content) => fetch(content.default))
      .then((response) => response.text())
      .then((responseText) => setMarkdownSostegnoPsicologico(responseText));

    import("./texts/sostegnogenitoriale.md")
      .then((content) => fetch(content.default))
      .then((response) => response.text())
      .then((responseText) => setMarkdownSostegnoGenitoriale(responseText));

    import("./texts/sostegnoperinatale.md")
      .then((content) => fetch(content.default))
      .then((response) => response.text())
      .then((responseText) => setMarkdownSostegnoPerinatale(responseText));

    import("./texts/massaggi.md")
      .then((content) => fetch(content.default))
      .then((response) => response.text())
      .then((responseText) => setMarkdownCorsiMassaggioInfantile(responseText));
  });

  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Box
                component="img"
                src="/psychologist.png"
                alt="psicologa"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Sostegno psicologico
              </Typography>
              <Markdown>{markdownSostegnoPsicologico}</Markdown>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Box
                component="img"
                src="/family.png"
                alt="famiglia"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Sostegno genitoriale
              </Typography>
              <Markdown>{markdownSostegnoGenitoriale}</Markdown>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Box
                component="img"
                src="/pregnant.png"
                alt="donna incinta"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Sostegno perinatale
              </Typography>
              <Markdown>{markdownSostegnoPerinatale}</Markdown>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Box
                component="img"
                src="/massage.png"
                alt="massaggio infantile"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Corsi di massaggio infantile
              </Typography>
              <Markdown>{markdownCorsiMassaggioInfantile}</Markdown>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
