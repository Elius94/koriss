import React from "react";
import AppAppBar from "./modules/views/AppAppBar";
import AppFooter from "./modules/views/AppFooter";
import withRoot from "./modules/withRoot";
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import "./404.css";
import { isMobile } from "react-device-detect";

export const AdvancedBannerTop = () => {
    const background: BannerLayer = {
        image: "/EL_04138_cielo.jpg",
        translateY: [10, 40],
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
        translateY: isMobile? [30, 33] : [30, 53],
        translateX: isMobile? [5, -10] : [5, -5],
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
        translateY: isMobile? [10, 13] : [10, 33],
        translateX: isMobile? [-30, -25] : [-30, -15],
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
                <AdvancedBannerTop />
            <AppFooter />
        </React.Fragment >
    )
}

export default withRoot(NotFound404);