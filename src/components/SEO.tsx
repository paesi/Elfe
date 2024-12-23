import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
}

export function SEO({ 
  title = 'Hofmann Immo-Service | Professionelle Immobilienpflege in Bern',
  description = 'Ihr zuverlässiger Partner für Reinigung, Wartung, Reparatur und Verwaltung von Immobilien in Bern. ✓ 20+ Jahre Erfahrung ✓ 24/7 Notfallservice',
  canonical = 'https://www.hofmann-immo-service.ch',
  type = 'website'
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="German" />
    </Helmet>
  );
}
