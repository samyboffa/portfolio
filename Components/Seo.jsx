import Head from "next/head";
import React from "react";

const Seo = () => {
  const title = "Sami GHARSALLAH Senior web developer";
  const description = `With more than 5 years of experience as a senior web
    developer, I specialize in creating websites ,
    mobile applications, and
     SaaS platforms. I also have expertise in crafting
    web scraping and integrating
    modern AI capabilities. `;
  const url = "https://sami-web-developer.bio/";
  const image = "https://imgur.com/a/PKPknVZ";
  return (
    <Head>
      <title>{title}</title>

      {/* <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" /> */}

      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" itemProp="image" content={image} />
      <meta property="og:description" content={description} />
      <link rel="Alternate" hrefLang="en-GB" href={url} />
      <meta property="og:site_name" content={title} />
      {/* TWITTER */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={description} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;
