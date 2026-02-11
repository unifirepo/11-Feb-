export const unifiAssets = {
  logo: '/unifi-assets/logo.png',
  icons: [
    '/unifi-assets/cropped-icon-Transparent-small--180x180.png',
    '/unifi-assets/cropped-icon-Transparent-small--192x192.png',
    '/unifi-assets/cropped-icon-Transparent-small--270x270.png',
    '/unifi-assets/cropped-icon-Transparent-small--32x32.png',
  ],

  // Hero imagery (top-level hero-*.jpg files from the "Unifi Site Images" folder)
  photos: [
    '/unifi-assets/hero-1a.webp',
    '/unifi-assets/hero-1b.webp',
    '/unifi-assets/hero-1c.webp',
    '/unifi-assets/hero-1d.webp',
    '/unifi-assets/hero-2.webp',
    '/unifi-assets/hero-3.webp',
    '/unifi-assets/hero-4.webp',
    '/unifi-assets/hero-5.webp',
    '/unifi-assets/hero-6.webp',
    '/unifi-assets/hero-7.webp',
    '/unifi-assets/hero-8.webp',
  ],

  // Card imagery (optimized webp)
  cards: [
    '/unifi-assets/card-1.webp',
    '/unifi-assets/card-2.webp',
    '/unifi-assets/card-3.webp',
    '/unifi-assets/card-4.webp',
    '/unifi-assets/card-5.webp',
    '/unifi-assets/card-6.webp',
    '/unifi-assets/card-7.webp',
    '/unifi-assets/card-8.webp',
    '/unifi-assets/card-9.webp',
    '/unifi-assets/card-10.webp',
    '/unifi-assets/card-11.webp',
    '/unifi-assets/card-12.webp',
  ],

  misc: [
    // A few additional photography options from the extracted folders (avoid black & white shots)
    '/unifi-assets/canary/photo-1692890528796-4b3fb17ec33b.webp',
    '/unifi-assets/canary/photo-1694902304056-b4ba1412d7b7.webp',
    '/unifi-assets/canary/photo-1694980876919-dbec5edba9a2.webp',
    '/unifi-assets/canary/photo-1696074010622-65271d2f423b.webp',
    '/unifi-assets/corporate/photo-1521737711867-e3b97375f902.webp',
    '/unifi-assets/corporate/photo-1556761175-4b46a572b786.webp',
    '/unifi-assets/corporate/photo-1600880292203-757bb62b4baf.webp',
    '/unifi-assets/corporate/photo-1590650046871-92c887180603.webp',
  ],
};

export type PlaceholderKind = 'hero' | 'card' | 'logo';

export function pickUnifiPlaceholder(kind: PlaceholderKind, seed: string = 'default') {
  if (kind === 'logo') return unifiAssets.logo;

  const pool =
    kind === 'hero'
      ? unifiAssets.photos
      : kind === 'card'
        ? unifiAssets.cards
        : [...unifiAssets.photos, ...unifiAssets.cards, ...unifiAssets.misc];

  const s = hash(seed);
  return pool[s % pool.length];
}

function hash(input: string) {
  // tiny deterministic hash
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}
