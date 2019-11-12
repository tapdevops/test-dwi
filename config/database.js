/*
 |--------------------------------------------------------------------------
 | Database Connections
 |--------------------------------------------------------------------------
 |
 | Here are each of the database connections setup for your application.
 | Of course, examples of configuring each database platform that is
 | supported by NodeJS is shown below to make development simple.
 |
 */
	module.exports = {
		dev: {
			url: 'mongodb://s_finding:s_finding@dbappdev.tap-agri.com:4848/s_finding?authSource=s_finding',
			ssl: false
		},
		qa: {
			url: 'mongodb://s_finding:f1n2019@dbappqa.tap-agri.com:4848/s_finding?authSource=s_finding',
			ssl: false
		},
		prod: {
			url: 'mongodb://s_finding:f1n2019@dbapp.tap-agri.com:4848/s_finding?authSource=s_finding',
			ssl: false
		}
	}