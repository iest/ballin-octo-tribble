var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('everyone');
  this.route('debuts');
  this.route('popular');
  /**
    Get auth'd first
  */
  // this.route('following');
});

export default Router;
