import Head from 'next/head';

const PreloadFonts = () => {
  const fonts = [
    { name: 'open-sans-v17-latin', weights: [300, 400, 600, 700] },
    { name: 'open-sans-condensed-v14-latin', weights: [300, 700] }
  ];
  return fonts
    .reduce((acc, font) => [...acc, ...font.weights.map(weight => `/fonts/${font.name}-${weight}.woff2`)], [])
    .map(url => (
      <link rel="preload" href={url} as="font" type="font/woff2" crossOrigin="anonymous" />
    ));
}

const PageHead = ({ title }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* browser tab view */}
    <title>{title ? 'Octopi | ' + title : 'Octopi'}</title>
    <link rel="icon" type="image/png" href="/favicon.png" /> 
    {/* preload assets */}
    <PreloadFonts />
  </Head>
)

export default PageHead;