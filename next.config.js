const withPlugins = require('next-compose-plugins');
const withImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withLess = require('@zeit/next-less');
const withPurgeCss = require('next-purgecss');
const dotenv = require('dotenv');
  
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
		[withLess, {
			lessLoaderOptions: {
				javascriptEnabled: true
			}
		}],
		[withPurgeCss, {
			purgeCssEnabled: ({ isServer }) => (isServer)
		}]
	], 
	{
		webpack: (config, { isServer, webpack }) => {
			const env = dotenv.config().parsed || process.env;
			const envKeys = Object.keys(env).reduce((prev, next) => {
				prev[`process.env.${next}`] = JSON.stringify(env[next]);
				return prev;
			}, {});
			// replace all env vars in project
			config.plugins.push(new webpack.DefinePlugin(envKeys))

			if (!isServer) {
				config.node = {
					fs: 'empty'
				}
			}
			return config;
		}
	}
);