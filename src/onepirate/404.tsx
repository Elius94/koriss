import React from "react";
import AppAppBar from "./modules/views/AppAppBar";
import AppFooter from "./modules/views/AppFooter";
import withRoot from "./modules/withRoot";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { isMobile } from 'react-device-detect';
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import "./404.css";

export const AdvancedBannerTop = () => {
    const background: BannerLayer = {
        image: "/EL_04138_cielo.jpg",
        translateY: [10, 60],
        opacity: [1, 0.3],
        scale: [1.05, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    };

    const foreground: BannerLayer = {
        image: "/EL_03496_b.png",
        translateY: [0, 22],
        scale: [1, 1.1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    };

    const korino: BannerLayer = {
        translateY: [30, 33],
        translateX: [5, -10],
        scale: [0.12, 0.18, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className="korino-img">
                <img src="/raccoon_cute.png" alt="korino" />
            </div>
        )
    };

    const cartello: BannerLayer = {
        translateY: [10, 13],
        translateX: [-30, -25],
        scale: [0.1, 0.2, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className="sign-img">
                <img src="/sign-404.png" alt="korino" />
            </div>
        )
    };

    const gradientOverlay: BannerLayer = {
        opacity: [0, 0.5, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="gradient inset" />
    };

    return (
        <ParallaxBanner
            layers={[background, foreground, korino, cartello, gradientOverlay]}
            className="full"
        />
    );
};

function NotFound404() {
    return (
        <React.Fragment>
            <AppAppBar />
            {isMobile ? (
                <AdvancedBannerTop />
            ) : (
                <div
                    style={{
                        height: "500px",
                        width: "100%",
                        minWidth: "1200px",
                        background: "#01011A",
                        color: "#fff",
                        overflow: "hidden",
                    }}>
                    <div
                        style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
                        }}
                    >
                        <MouseParallaxContainer
                            className="parallax"
                            containerStyles={{
                                width: "100%",
                                display: "grid",
                                gridTemplateColumns: "auto auto auto auto auto"
                            }}
                            resetOnLeave
                        >
                            <MouseParallaxChild
                                factorX={0.03}
                                factorY={0.01}
                                updateStyles={{
                                    background: "url(/EL_03496.jpg)",
                                    backgroundPositionY: "80%",
                                    transform: "scale(1.2)",
                                    position: "absolute",
                                    filter: "blur(1px) brightness(80%)",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    width: "100%",
                                    height: "100%",
                                    backfaceVisibility: "hidden",
                                    boxShadow: "inset 0px 0px 150px black"
                                }}
                            >
                            </MouseParallaxChild>
                            <MouseParallaxChild
                                factorX={0.08}
                                factorY={0.05}
                                updateStyles={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "auto",
                                    height: "61%"
                                }}
                            >
                                <img
                                    src="/raccoon_cute.png"
                                    alt="Cute Raccoon"
                                    height={"40%"}
                                    style={{
                                        margin: "5% 8% 300px",
                                    }}
                                />
                            </MouseParallaxChild>
                            <MouseParallaxChild
                                factorX={0.05}
                                factorY={0.03}
                                updateStyles={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "auto",
                                    height: "52%"
                                }}
                            >
                                <img
                                    src="/sign-404.png"
                                    alt="Road Sign"
                                    height={"30%"}
                                    style={{
                                        margin: "5% 8% 300px",
                                    }}
                                />
                            </MouseParallaxChild>
                        </MouseParallaxContainer>
                    </div>
                </div>
            )}
            <AppFooter />
        </React.Fragment >
    )
}

export default withRoot(NotFound404);