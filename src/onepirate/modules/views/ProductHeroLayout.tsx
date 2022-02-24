import * as React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { ParallaxBanner } from "react-scroll-parallax";

const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    height: "80vh",
    minHeight: 500,
    maxHeight: 1300,
  },
}));

interface ProductHeroLayoutProps {
  bgImage: string;
}

export default function ProductHeroLayout(
  props: React.HTMLAttributes<HTMLDivElement> & ProductHeroLayoutProps
) {
  const { children, bgImage } = props;
  return (
    <ParallaxBanner
      layers={[{ image: bgImage, speed: -20, style: { zIndex: "-2" } }]}
      className="aspect-[2/1]"
    >
      <ProductHeroLayoutRoot>
        <Container
          sx={{
            mt: 3,
            mb: 14,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/productHeroWonder.png"
            alt="wonder"
            width="147"
            height="80"
          />
          {children}
          <Box
            component="div"
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundColor: "common.black",
              opacity: 0.5,
              zIndex: -1,
            }}
          />

          <Box
            component="img"
            src="/productHeroArrowDown.png"
            height="16"
            width="12"
            alt="arrow down"
            sx={{ position: "absolute", bottom: 32 }}
          />
        </Container>
      </ProductHeroLayoutRoot>
    </ParallaxBanner>
  );
}
