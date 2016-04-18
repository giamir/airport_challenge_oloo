module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      'public/js/**/*.js',
      'test/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      'public/js/**/*.js': ['coverage']
    },
    reporters: ['spec', 'coverage', 'coveralls'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // browsers: ['Chrome'],
    browsers: ['PhantomJS'],
    singleRun: true,
    coverageReporter: {
        type: 'lcov',
        dir: 'coverage/'
    }
  });
};
