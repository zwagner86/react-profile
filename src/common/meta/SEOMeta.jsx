import React from 'react';
import {Helmet} from 'react-helmet';
import meta from './meta';

const SEOMeta = props => {
    const {
        siteLanguage,
        siteTitle,
        siteDescription,
        siteUrl,
        authorTwitterAccount
    } = meta;

    return (
        <Helmet
            htmlAttributes={{
                lang: siteLanguage,
                prefix: "og: http://ogp.me/ns#"
            }}
        >
            {/* General tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            {/* OpenGraph tags */}
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:type" content="website" />
            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={authorTwitterAccount} />
            <meta name="twitter:creator" content={authorTwitterAccount} />
        </Helmet>
    );
};

export default SEOMeta;
