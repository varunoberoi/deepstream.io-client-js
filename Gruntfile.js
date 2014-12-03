module.exports = function(grunt) {


	grunt.initConfig({
		
		pkg: grunt.file.readJSON( 'package.json' ),

		browserify: {
			dist: {
				files: {
					'dist/deepstream.js': [ 'src/client.js' ]
				}
			},
			live: {
				files: {
					'dist/deepstream.js': [ 'src/client.js' ]
				},
				options: {
					watch: true,
					keepAlive: true
				}
			}
		},
		
		uglify: {
			dist: {
				files: {
					'dist/deepstream.min.js': [ 'dist/deepstream.js' ]
				}
			}
		},

		karma: {
			unit: {
				configFile: 'karma.conf.js'
			},
			unitOnce: {
				configFile: 'karma.conf.js',
				singleRun: true
			}
		}
		
	});

	grunt.loadNpmTasks( 'grunt-browserify' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-karma' );

	grunt.registerTask( 'build', [
		'karma:unitOnce',
		'browserify:dist',
		'uglify:dist'
	]);

	grunt.registerTask( 'unit', [ 'karma:unit' ] );
	grunt.registerTask( 'default', [ 'build' ] );

};