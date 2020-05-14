import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
const packageJson = require('../../../package.json');

function SEO({ description, lang, meta, title, titleTemplate }) {
  const site = {
    siteMetadata: {
      title: 'NO MORE WASTE TODAY',
      defaultTitle: 'Best tool to find the recycle points in hong kong and more',
      description:
        ' website that aims to help citizens find the closest recycling points for their best use, in addition to providing the news, advice. Also from shops, businesses and companies specialized in environmental conservation',
      author: 'nitroclik.com',
      version: packageJson.version,
      //googleSiteVerification: envConfig.GOOGLE_SEARCH_CONSOLE_SITE_VERIFICATION,
    },
  };

  const metaDescription = description || site.siteMetadata.description;
  let mergedMeta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      name: `appVersion`,
      content: site.siteMetadata.version,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];
  mergedMeta = mergedMeta.concat(meta);

  // add google-site-verification if exist in config
  if (!_.isEmpty(site.siteMetadata.googleSiteVerification)) {
    mergedMeta = mergedMeta.concat({
      name: `google-site-verification`,
      content: site.siteMetadata.googleSiteVerification,
    });
  }

  const seoTitle = title ? title : site.siteMetadata.defaultTitle;
  const seoTitleTemplate = titleTemplate
    ? titleTemplate
    : title
    ? `%s | ${site.siteMetadata.title}`
    : `%s`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seoTitle}
      titleTemplate={seoTitleTemplate}
      meta={mergedMeta}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
