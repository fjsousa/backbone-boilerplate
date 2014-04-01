define([
  'jquery',
  'underscore',
  'backbone',
  'collections/collection',
  'text!templates/Template.html'
], function($, _, Backbone, Collection, Template){

  var View = Backbone.View.extend({

     el: '.page',

     //...

  });

  return View;
});
