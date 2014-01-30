import ajax from 'appkit/utils/ajax';

export default Ember.Route.extend({
  model: function() {
    return ajax({
      url: 'http://api.dribbble.com/shots/everyone?per_page=30',
      dataType: 'jsonp'
    }).then(function (resp) {
      return resp.shots;
    });
  }
});