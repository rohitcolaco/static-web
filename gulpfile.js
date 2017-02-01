// INSTALL WITH: npm install --save-dev gulp-*

var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_uglify = require('gulp-uglify'),
    gp_clean_css = require('gulp-clean-css');

gulp.task('js-fef', function(){
    return gulp.src([
            "./public/dependencies/jquery/dist/jquery.min.js",
            "./public/dependencies/bootstrap/dist/js/bootstrap.min.js",
            "./public/dependencies/angular/angular.min.js",
            "./public/dependencies/angular-animate/angular-animate.min.js",
            "./public/dependencies/angular-route/angular-route.min.js",
            "./public/dependencies/angular-bootstrap/ui-bootstrap.min.js",
            "./public/dependencies/angular-bootstrap/ui-bootstrap-tpls.min.js",
            "./public/dependencies/angular-modal-service/dst/angular-modal-service.min.js",
            "./public/dependencies/ng-file-upload-shim/ng-file-upload-shim.min.js",
            "./public/dependencies/ng-file-upload/ng-file-upload.min.js",
            "./public/dependencies/lscache/lscache.min.js",
            "./public/angular/module.js",
            "./public/angular/global/*.js",
            "./public/angular/feature/login/*.js",
            "./public/angular/feature/f1/*.js",
            "./public/angular/feature/f1/popup/*.js"
        ])
        //.pipe(gp_uglify())
        .pipe(gp_concat('default.min.js'))
        .pipe(gulp.dest('./public/angular'));
});

gulp.task('css-fef', function() {
    return gulp.src([
        "./public/dependencies/bootstrap/dist/css/bootstrap.min.css",
        "./public/dependencies/bootstrap/dist/css/bootstrap-theme.min.css",
        "./public/dependencies/font-awesome/css/font-awesome.min.css",
        "./public/dependencies/angular-bootstrap/ui-bootstrap-csp.css",
        "./public/angular/global/*.css",
        "./public/angular/feature/f1/*.css",
        "./public/angular/feature/f1/popup/*.css"
    ])
    //.pipe(gp_clean_css({compatibility: 'ie8'}))
    .pipe(gp_concat('default.min.css'))
    .pipe(gulp.dest('./public/angular'));
});

gulp.task('default', ['js-fef', 'css-fef'], function(){
});

