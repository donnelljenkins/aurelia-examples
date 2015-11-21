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
        'github:Semantic-Org/Semantic-UI',
        'github:twbs/bootstrap',
        'lodash'
      ],
      options: {
        inject: true,
        minify: true
      }
    },
    "dist/aurelia": {
      includes: [
        'aurelia-bootstrapper',
        'aurelia-templating-binding',
        'aurelia-templating-resources',
        'aurelia-templating-router',
        'aurelia-validation',
        'aurelia-loader-default',
        'aurelia-history-browser',
        'aurelia-logging-console',
        'donnelljenkins/aurelia-datagrid',
        'donnelljenkins/aurelia-semantic-datatable'
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
