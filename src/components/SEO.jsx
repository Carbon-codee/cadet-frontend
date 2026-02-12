import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords,
    ogType = 'website',
    ogImage,
    canonicalUrl,
    jsonLd,
    noindex = false // Default to allow indexing
}) => {
    const siteTitle = 'Marine Cadet - Denizcilik Eğitimi ve Staj Platformu';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = 'Marine Cadet ile denizcilik kariyerinizi planlayın. STCW sertifikalı eğitimler, staj ilanları ve kariyer rehberliği.';
    const defaultKeywords = 'denizcilik, staj, STCW, gemi, öğrenci, eğitim, maritime, internship';
    const baseUrl = 'https://marinecadet.com'; // Update with actual domain

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            {ogImage && <meta property="og:image" content={ogImage} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}

            {/* Canonical URL */}
            {canonicalUrl && <link rel="canonical" href={`${baseUrl}${canonicalUrl}`} />}

            {/* JSON-LD Structured Data */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}

            {/* Additional SEO tags */}
            <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
            <meta name="language" content="Turkish" />
            <meta name="author" content="Marine Cadet" />
        </Helmet>
    );
};

export default SEO;
