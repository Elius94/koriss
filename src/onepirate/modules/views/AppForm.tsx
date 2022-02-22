import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import { WithStyles } from '@mui/styles';
import withStyles from '@mui/styles/withStyles';
import Paper from "../components/Paper";

const styles = (theme: Theme) => ({
  root: {
    display: "flex",
    backgroundImage: "url(/static/onepirate/appCurvyLines.png)",
    backgroundRepeat: "no-repeat",
  },
  paper: {
    padding: theme.spacing(4, 3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(8, 6),
    },
  },
});

function AppForm(
  props: WithStyles<typeof styles> & React.HTMLAttributes<HTMLDivElement>
) {
  const { children, classes } = props;

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Box mt={7} mb={12}>
          <Paper className={classes.paper} background="light">
            {children}
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default withStyles(styles)(AppForm);
