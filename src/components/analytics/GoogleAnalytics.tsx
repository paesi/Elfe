import React from 'react';
import { Helmet } from 'react-helmet-async';

export function GoogleAnalytics() {
  return (
    <Helmet>
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11114851569"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11114851569');
        `}
      </script>
    </Helmet>
  );
}
