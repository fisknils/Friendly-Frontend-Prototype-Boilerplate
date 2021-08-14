import jQuery from 'jquery';

jQuery( $ => {
	$( 'img[src="lorem"]' ).each( function( i ) {
		const $img = $( this );
		const width = $img.attr( 'width' );
		const height = $img.attr( 'height' );

		$img.attr( 'src', `https://picsum.photos/${ width }/${ height }?${ i }` );
	} );
} );
