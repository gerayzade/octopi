export const PreloadFonts = () => {
  const fonts = [
    { name: 'open-sans-v17-latin', weights: [300, 400, 600, 700] }
  ];
  return fonts
    .reduce((acc, font) => [...acc, ...font.weights.map(weight => `/fonts/${font.name}-${weight}.woff2`)], [])
    .map(url => (
      <link rel="preload" href={url} as="font" type="font/woff2" crossOrigin="anonymous" />
    ));
}

export const PreloadImages = () => {
  return [
  ].map(url => (
    <link rel="preload" href={url} as="image" />
  ));
}