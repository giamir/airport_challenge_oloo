module.exports = function(grunt) {
  grunt.initConfig({
    jasmine_nodejs: grunt.file.readYAML('test/conf.yml')
  });
  grunt.loadNpmTasks('grunt-jasmine-nodejs');
};
