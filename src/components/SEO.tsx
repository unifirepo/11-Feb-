import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export function SEO({
  title = "unifi.id – Movement Intelligence with IoT – Seamless data solutions for smarter buildings",
  description = "Analytics and data insights are vital to build a structure to attain your ESG targets and avoid greenwashing. Unifi.id",
  canonical = "https://unifi.id/",
  ogImage = "/og-image.jpg",
  ogType = "website"
}: SEOProps) {
  const hasBrand = /unifi\.id/i.test(title);
  const fullTitle = hasBrand ? title : `${title} | unifi.id`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}
