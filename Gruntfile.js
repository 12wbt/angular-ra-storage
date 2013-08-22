/* global require */
(function() {
  'use strict';

  module.exports = function(grunt) {
    // Load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
      dist: 'dist',

      clean: {
        dist: ['angular-ra-storage.js', 'angular-ra-storage.min.js']
      },

      concat: {
        dist: {
          src:  ['src/angular-ra-storage.js'],
          dest: 'angular-ra-storage.js'
        }
      },

      uglify: {
        dist: {
          src:  ['src/angular-ra-storage.js'],
          dest: 'angular-ra-storage.min.js'
        }
      },

      bower: {
        options: {
          copy: false
        },
        install: {}
      },

      jshint: {
        options: {
          jshintrc: '.jshintrc'
        },
        all: [
          'Gruntfile.js',
          'src/{,*/}*.js',
          'test/{,*/}*.js',
        ]
      },

      karma: {
        dev: {
          configFile: 'karma.conf.js',
          singleRun: false
        },

        dist: {
          configFile: 'karma.conf.js'
        }
      }
    });

    grunt.registerTask('test', 'karma:dev');
    grunt.registerTask('build', ['jshint:all', 'bower', 'karma:dist', 'clean', 'concat:dist', 'uglify:dist']);
  };
})();
