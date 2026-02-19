'use client';

import Head from 'next/head';
import { useEffect } from 'react';

export default function Welcome2Redirect() {
  useEffect(() => {
    // JS redirect as a backup if meta refresh is blocked.
    window.location.replace('https://unifi.id/');
  }, []);

  return (
    <>
      <Head>
        <title>Redirecting…</title>
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://unifi.id/" />
        <meta httpEquiv="refresh" content="0; url=https://unifi.id/" />
      </Head>
      <main style={{ padding: 24, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
        <p>
          Redirecting to <a href="https://unifi.id/">unifi.id</a>…
        </p>
      </main>
    </>
  );
}
