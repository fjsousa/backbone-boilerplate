// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/UserListView',
  'views/EditUserView'
], function($, _, Backbone, UserListView, EditUserView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'home',
      'new': 'editUser',
      'edit/:id' : 'editUser'
    }
  });
  
  var initialize = function(){

    var appRouter = new AppRouter();

    appRouter.on('route:home', homeRoute);
    appRouter.on('route:editUser', editUserRoute);

    function homeRoute() {
      var userListView = new UserListView();
      userListView.render();
    }

    function editUserRoute (id) {
      var editUserView = new EditUserView();
      editUserView.render({id: id});
    }

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
