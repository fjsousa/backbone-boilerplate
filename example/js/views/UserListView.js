define([
  'jquery',
  'underscore',
  'backbone',
  'collections/UserListCollection',
  'text!templates/UserListTemplate.html'
], function($, _, Backbone, UserListCollection, UserListTemplate){

  var UserListView = Backbone.View.extend({

     el: '.page',

     render: function(){
      var that = this;
      var users = new UserListCollection();
      users.fetch({
        success:function(users){
          var template = _.template(UserListTemplate, {users: users.models});
          that.$el.html(template);
        }
      });
        
     }
  });

  return UserListView;
});
