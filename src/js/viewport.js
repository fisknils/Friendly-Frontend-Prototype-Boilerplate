document.querySelectorAll( '.viewport' ).forEach( viewPort => {
	viewPort.querySelector( '.width' ).innerText += ' ' + window.innerWidth;
	viewPort.querySelector( '.height' ).innerText += ' ' + window.innerHeight;
} );
