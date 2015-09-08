module.exports = function(grunt) {

  //Some helper vars
  var host = '127.0.0.1',
      port = 9000,
      deafultOpen = '/app',
      gruntTarget = grunt.option('target') || 'dev';

  // Project and tasks configuration.
  grunt.initConfig({
    // Read main info from package.json
    pkg: grunt.file.readJSON('package.json'),

    // Initial setup for grunt-http-server
    'http-server': {
      'dev': {
        root: '.',
        port: port,
        host: host,
        //cache: <sec>,
        showDir : true,
        autoIndex: true,
        ext: "html", //server default file extension 

        // run in parallel with other tasks 
        runInBackground: false, //if set to true it auto-stops :(

        //logger function
        logFn: function(req, res, error) { },

        //https: { //can be set to just https: true
        //    cert: "cert.pem",
        //    key : "key.pem"
        //}
      }
    },

    // Initial setup for grunt-open
    open: {
      dev: {
        path: 'http://' + host + ':' + port + deafultOpen
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-http-server');

  // Register tasks to be run from cli (grunt task)
  grunt.registerTask('run', ['http-server']);
  grunt.registerTask('runopen', ['open:' + gruntTarget, 'http-server']);

  // Register default task(s).
  grunt.registerTask('default', ['open:' + gruntTarget, 'http-server']);
  
};