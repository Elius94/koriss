import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Markdown from "../components/Markdown";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { isMobile } from 'react-device-detect';
import Image from 'mui-image'

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
  },
  "&:hover": {
    zIndex: 2,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

function ProductHowItWorks() {
  const [markdown, setMarkdown] = useState("");
  const [handWidth, setHandWidth] = useState(window.innerWidth * 0.85);
  const [handPercentageOffset] = useState(0.9);

  // https://github.com/webpack/webpack/issues/6680
  useEffect(() => {
    import("./texts/biography.md")
      .then((content) => fetch(content.default))
      .then((response) => response.text())
      .then((responseText) => setMarkdown(responseText));

    function handleResize() {
      setHandWidth(window.innerWidth * 0.85);
    }
    window.addEventListener('resize', handleResize)
  });

  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "secondary.light", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          Chi sono?
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <ImageIconButton
                key={"Martina"}
                style={{
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                  }}
                >
                  <Image src="/DSC_0655.JPG" alt="Martina Muzzi Psicologa Bologna" />
                </Box>
                <ImageBackdrop className="imageBackdrop" />
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "common.white",
                  }}
                >
                  <Typography
                    component="h3"
                    variant="h6"
                    color="inherit"
                    className="imageTitle"
                  >
                    {"Martina"}
                    <div className={"imageMarked"} />
                  </Typography>
                </Box>
              </ImageIconButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box component="div" sx={number}>Mi presento.</Box>
              <Markdown>{markdown}</Markdown>
            </Grid>
          </Grid>
        </div>
        {isMobile ? (
          <Parallax
            translateX={[`${handWidth}px`, `${handWidth - (window.innerWidth * handPercentageOffset)}px`]}
            scale={[0.55, 0.65]}
            rotate={[-80, -90]}
            easing="easeInOutCubic"
          >
            <Box
              component="img"
              src="/ciao.png"
              alt="manina"
              style={{ width: `${handWidth}px`, position: "absolute", marginLeft: -200, opacity: 0.4, zIndex: -2 }} />
          </Parallax>
        ) : null}
      </Container>
      {isMobile ? null : (
        <>
          <Parallax
            translateX={[`-${window.innerWidth + 80}px`, `-${window.innerWidth - 150}px`]}
            scale={[0.45, 0.65]}
            rotate={[-180, 0]}
            easing="easeInOutQuint"
          >
            <Box
              component="img"
              src="/raccoon_cute.png"
              alt="un korino"
              style={{ position: "absolute", opacity: 0.7, zIndex: 0 }} />
          </Parallax>
          <Parallax
            translateX={['300px', '-100px']}
            scale={[0.55, 0.65]}
            rotate={[-80, -90]}
            easing="easeInOutCubic"
          >
            <Box
              component="img"
              src="/ciao.png"
              alt="manina"
              style={{ position: "absolute", marginLeft: -200, opacity: 0.6, zIndex: -2 }} />
          </Parallax>
        </>
      )}
    </Box>
  );
}

export default ProductHowItWorks;
