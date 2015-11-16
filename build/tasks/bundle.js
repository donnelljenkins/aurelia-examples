var gulp = require('gulp');
var bundler = require('aurelia-bundler');

var config = {
  force: true,
  packagePath: '.',
  bundles: {
    "dist/app-build": {
      includes: [
        '*',
        '*.html!text',
        '*.css!text'
      ],
      options: {
        inject: true,
        minify: true
      }
    },
    "dist/system": {
      includes: [
        'github:Semantic-Org/Semantic-UI'
      ],
      options: {
        inject: true,
        minify: true
      }
    },
    "dist/aurelia": {
      includes: [
        'aurelia-bootstrapper',
        'github:aurelia/templating-binding',
        'github:aurelia/templating-resources',
        'github:aurelia/templating-router',
        'github:aurelia/validation',
        'github:aurelia/loader-default',
        'github:aurelia/history-browser',
        'github:aurelia/logging-console'
      ],
      options: {
        inject: true,
        minify: true
      }
    }
  }
};

gulp.task('bundle', function() {
 return bundler.bundle(config);
});

gulp.task('unbundle', function() {
 return bundler.unbundle(config);
});
