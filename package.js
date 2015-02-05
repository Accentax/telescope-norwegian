Package.describe({
  summary: 'Telescope norwegian add on for moment.js',
  version: '0.1.0',
  name: 'telescope-norwegian'
});

Npm.depends({
  // NPM package dependencies
});

Package.onUse(function (api) {

  // --------------------------- 1. Meteor packages dependencies ---------------------------

  // automatic (let the package specify where it's needed)

  api.use([
    'tap:i18n',                   // internationalization package
    'iron:router',                // routing package
    'telescope-base',             // basic Telescope hooks and objects
    'telescope-lib',              // useful functions
    'telescope-i18n',             // internationalization wrapper
    'fourseven:scss',              // SCSS compilation package
    'telescope-search'
  ]);

  // client

  api.use([
    'jquery',                     // useful for DOM interactions
    'underscore',                 // JavaScript swiss army knife library
    'templating'                  // required for client-side templates
  ], ['client']);

  // server

  api.use([
    //
  ], ['server']);

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.add_files([
    'package-tap.i18n'
  ], ['client', 'server']);

  // both

  // client

  api.add_files([
  ], ['client']);

  // server

  api.add_files([
  ], ['server']);    

  // i18n languages (must come last)

  api.add_files([
    'i18n/main.js',
  ], ['client', 'server']);

  // -------------------------------- 3. Variables to export --------------------------------

  api.export([
      
   
  ]);

});