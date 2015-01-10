/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-modals',

  included: function(app) {
    var options = app.options.modals;
    var animation = options.animation;

    if (options.layout) {
      app.import('vendor/styles/layout.css');
    }

    if (options.style) {
      app.import('vendor/styles/style.css');
    }

    if (animation) {
      app.import('vendor/styles/animations/' + animation + '.css');
    }

    // app.registry.add('js', modalOptions);
    // console.log(app.container); // HERE - need to register options
    // console.log(app);
  }
};
