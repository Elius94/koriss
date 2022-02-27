import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export interface SeoProps {
    title: string;
    description: string;
    keywords: string;
    author: string;
    openGraph: {
        url: string;
        title: string;
        description: string;
        site_name: string;
        image: string;
        locale: string;
        type: string;
    } | undefined;
    twitter: {
        image: string;
        card: string;
        url: string;
        title: string;
        description: string;
    } | undefined;
    favicon: string | undefined;
    manifest: string | undefined;
}

const Seo = (props: SeoProps) => {
    const {
        title,
        description,
        keywords,
        author,
        openGraph,
        twitter,
        favicon,
        manifest
    } = props;

    return (
        <HelmetProvider>

            <Helmet>
                <title>{title}</title>

                {/*<!--=============== favicons ===============-- />*/}
                {favicon ? <link rel="shortcut icon" href={favicon} /> : null}
                {manifest ? <link rel="manifest" href={manifest} /> : null}

                {/*<link rel="apple-touch-icon" sizes="60x60" href="images/icons/apple-touch-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="images/icons/apple-touch-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="images/icons/apple-touch-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="images/icons/apple-touch-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-touch-icon-180x180.png" />
                <link rel="icon" type="image/icons" sizes="512x512" href="images/icons/android-chrome-512x512.png" />
                <link rel="icon" type="image/icons" sizes="192x192" href="images/icons/android-chrome-192x192.png" />
                <link rel="icon" type="image/icons" sizes="32x32" href="images/icons/favicon-32x32.png" />
                <link rel="icon" type="image/icons" sizes="16x16" href="images/icons/favicon-16x16.png" />*/}

                <meta name="title" content={title} />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
            </Helmet>

            {/*<!--============== OpenGraphs ==============-- />*/}
            {
                openGraph ? (
                    <Helmet>
                        <meta property="og:type" content={openGraph.type} />
                        <meta property="og:title" content={openGraph.title} />
                        <meta property="og:description" content={openGraph.description} />
                        <meta property="og:url" content={openGraph.url} />
                        <meta property="og:site_name" content={openGraph.site_name} />
                        <meta property="og:image" content={openGraph.image} />
                        <meta property="og:locale" content={openGraph.locale} />
                    </Helmet>
                ) : null
            }

            {/*<!--============== Twitter Card ==============-- />*/}
            {
                twitter ? (
                    <Helmet>
                        <meta name="twitter:card" content={twitter.card} />
                        <meta name="twitter:url" content={twitter.url} />
                        <meta name="twitter:title" content={twitter.title} />
                        <meta name="twitter:description" content={twitter.description} />
                        <meta name="twitter:image" content={twitter.image} />
                    </Helmet>
                ) : null
            }
        </HelmetProvider>
    );
};

export default Seo;