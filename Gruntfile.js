module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    serve: {
        options: {
            port: 9000,
            aliases: {
              'index.html': {
                tasks: [],
                output: 'app/index.html'
              }
            }
        }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-serve');

  // Register tasks to be run from package.json by npm
  grunt.registerTask('start', ['grunt-serve']);

  // Register default task(s).
  grunt.registerTask('default', []);
  
};