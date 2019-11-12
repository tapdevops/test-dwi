/*
|--------------------------------------------------------------------------
| Variable
|--------------------------------------------------------------------------
*/
	const MomentTimezone = require( 'moment-timezone' );

/*
|--------------------------------------------------------------------------
| Helper Library
|--------------------------------------------------------------------------
|
| Helpers, as the name suggests, help you with tasks. Each helper file is 
| simply a collection of functions in a particular category. There are URL 
| Helpers, that assist in creating links, there are Form Helpers that help 
| you create form elements, Text Helpers perform various text formatting 
| routines, Cookie Helpers set and read cookies, File Helpers help you deal 
| with files, etc.
|
*/
	class HelperLib {

		date_format( value, format ) {
			var result = '';
			value = value.toString();
			value = value.replace( /-/g, "" );
			value = value.replace( /:/g, "" );
			value = value.replace( / /g, "" );

			if ( value == 'now' ) {
				value = MomentTimezone( new Date() ).tz( "Asia/Jakarta" ).format( "YYYYMMDDHHmmss" );
			}

			switch ( format ) {
				case 'YYYYMMDD':
					if ( value.length == 14 || value.length == 8 ) {
						result = value.substr( 0, 4 ) + value.substr( 4, 2 ) + value.substr( 6, 2 );
						result = value;
					}
					else {
						result = '';
					}
				break;
				case 'YYYY-MM-DD':
					if ( value.length == 14 || value.length == 8 ) {
						result = value.substr( 0, 4 ) + '-' + value.substr( 4, 2 ) + '-' + value.substr( 6, 2 );
					}
					else {
						result = '';
					}
				break;
				case 'YYYYMMDDhhmmss':
					if ( value.length == 14 ) {
						result = value.substr( 0, 4 ) + value.substr( 4, 2 ) + value.substr( 6, 2 ) + value.substr( 8, 2 ) + value.substr( 10, 2 ) + value.substr( 12, 2 );
					}
					else {
						result = '';
					}
				break;
				case 'YYYY-MM-DD hh-mm-ss':
					if ( value.length == 14 ) {
						result = value.substr( 0, 4 ) + '-' + value.substr( 4, 2 ) + '-' + value.substr( 6, 2 ) + ' ' + value.substr( 8, 2 ) + ':' + value.substr( 10, 2 ) + ':' + value.substr( 12, 2 );
					}
					else {
						result = '';
					}
				break;
				case 'YYYY-MM-DD hh:mm:ss':
					if ( value.length == 14 ) {
						result = value.substr( 0, 4 ) + '-' + value.substr( 4, 2 ) + '-' + value.substr( 6, 2 ) + ' ' + value.substr( 8, 2 ) + ':' + value.substr( 10, 2 ) + ':' + value.substr( 12, 2 );
					}
					else {
						result = '';
					}
				break;
			}

			if ( result != 0 ) {
				return result;
			}
			else {
				return '';
			}
		}

		status_finding( value ) { 
			var value = Number( value );
			var result = '';
			if ( value == 0 ) {
				result = 'BARU';
			}
			else if ( value > 0 && value < 100 ) {
				result = 'SEDANG DIPROSES';
			}
			else if ( value == 100 ) {
				result = 'SELESAI';
			}

			return result;
		};
	}

/*
|--------------------------------------------------------------------------
| Module Exports
|--------------------------------------------------------------------------
*/
	module.exports = new HelperLib();