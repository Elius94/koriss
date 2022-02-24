import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import { Gavel, LinkedIn } from "@mui/icons-material";
import Iubenda from 'react-iubenda-policy'

function Copyright() {
  return (
    <React.Fragment>
      {"© Martina Muzzi "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "warning.main",
  mr: 1,
  "&:hover": {
    bgcolor: "warning.dark",
  },
};

export default function AppFooter() {
  const myPolicy = 70817588

  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.light" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: "flex" }}>
                <Box component="a" href="https://it.linkedin.com/in/martina-muzzi-a80a94227" sx={iconStyle}>
                  <LinkedIn color="action" />
                </Box>
                <Box
                  component="a"
                  href="https://www.ordinepsicologier.it/it/albo/10319a-martina-muzzi"
                  sx={iconStyle}
                >
                  <Gavel color="action" />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Iubenda id={myPolicy} type='privacy' styling='white'>
                  Privacy Policy
                </Iubenda>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Iubenda id={myPolicy} type='cookie' styling='black'>
                  Cookie Policy
                </Iubenda>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#" className="iubenda-cs-preferences-link">Aggiorna le tue preferenze</Link>
              </Box>
            </Box>
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
              {"Tel. "} 
              <Link href="tel:+393347156936">
                3347156936
              </Link>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {"Email: "}
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
