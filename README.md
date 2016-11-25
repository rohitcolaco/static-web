## Standalone static UI files that defines the frontend 
*Note that this project interacts with a set of mapped / decoupled backend services (e.g. grizzly-web-service)*

File list:
* bower.json = names of all external JS / CSS libs to be pulled
* .bowerrc = relative path where externals are pulled
* gulpfile.js = gulp tasks to concatenate and uglify JS / CSS
* package.json = gulp modules to be installed

One time setup: (prereq = install [node](https://nodejs.org), [bower](https://bower.io), [gulp](http://gulpjs.com/)); then...

1. To bring in all bower dependencies, run:
`bower install`

2. To bring in all gulp dependencies, run:
`npm install`

3. To build or update default.min.js and default.min.css, run:
`gulp`

Incremental updates:

1. To add a new JS / CSS lib, install as...
`bower install xyz --save`

2. To reference the new JS / CSS lib, add specifics to...
`gulpfile.js`

Test the app locally at:
http://localhost/public/angular/
(assuming your web server runs on port 80 and has its document root pointing to the static-web/ project's base folder)
