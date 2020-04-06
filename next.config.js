const withPlugins = require('next-compose-plugins');
const withImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withSass = require('@zeit/next-sass');
const withPurgeSass = require('next-purgecss')
  
module.exports = withPlugins(
	[
		[withImages, {
			imagesFolder: 'img',
			optimizeImagesInDev: true,
			svgo: {},
			mozjpeg: { quality: 80 },
			optipng: { optimizationLevel: 3 },
		}],
		[withFonts, {
			enableSvg: false
		}],
		withSass,
		withPurgeSass
	], 
	{
		webpack: (config, { isServer }) => {
			if(!isServer) {
				config.node = {
					fs: 'empty'
				}
			}
			return config;
		}
	}
);