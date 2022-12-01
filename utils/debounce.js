const debounce = ( func, delay ) => {

	let debounceTimer

	return function ( ...args ) {

		clearTimeout( debounceTimer )

		// Pass { abort: true } to cancel
		if ( args[0] && args[0].abort ) {

			return

		}

		debounceTimer = setTimeout( () => func.apply( this, args ), delay )

	}

}
export default debounce;