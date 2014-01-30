export default Ember.Route.extend({
  redirect: function (model) {
    this.transitionTo('everyone');
  }
});
