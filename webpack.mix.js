const mix = require( 'laravel-mix' );
mix.pug = require( 'laravel-mix-pug-recursive' );
const { join, resolve } = require( 'path' );

mix.alias(
	{
		'@normalize': resolve( __dirname, 'node_modules/normalize.css/normalize.css' ),
	}
);

mix
	.js( 'src/js/index.js', 'dist' )
	.sass( 'src/scss/style.scss', 'dist' )
	.pug( 'src/pug/index.pug', 'dist', {} )
	.setPublicPath( __dirname )
	.copy( `${ join( __dirname, 'dist', __dirname ) }/**/*.html`, 'dist' );

if ( ! mix.inProduction() ) {
	mix.browserSync( {
		host: 'localhost',
		port: 1337,
		server: './dist',
		watch: true,
		open: false,
	} );

	// Sourcemaps - When not in production we want sourcemaps.
	mix.webpackConfig( {
		devtool: 'inline-source-map',
	} ).sourceMaps();
} else {
	// Disable browser notifications in production.
	mix.disableNotifications();
}
