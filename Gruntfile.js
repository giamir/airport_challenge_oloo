module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      options: {
        configFile: './test/conf.js'
      },
      run: {
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.registerTask('unit', ['karma']);
};
