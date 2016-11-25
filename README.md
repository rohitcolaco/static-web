Standalone static UI files in a project that interact with a set of mapped / decoupled backend services

bower.json = names of all external JS / CSS libs to be pulled
.bowerrc = relative path where externals are pulled

gulpfile.js = gulp tasks to concatenate and uglify JS / CSS
package.json = gulp modules to be installed

To add a new JS / CSS lib, install as...
bower install xyz --save

To reference the new JS / CSS lib, add specifics to...
gulpfile.js

