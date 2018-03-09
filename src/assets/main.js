$(function(){

  $.ajax({
    url: 'https://www.codeschool.com/users/2263001.json',
    dataType: 'jsonp',
    success: function(response) {
      showBadges(response.courses.completed);
    }
  });

  var showBadges = function(queryData) {

    var badges = $('#badges');

    queryData.forEach(function(course){
      
      var div = $('<div />', {'class': 'course'}).appendTo(badges);
      $('<h3 />', {text: course.title}).appendTo(div);
      $('<img />', {src: course.badge}).appendTo(div);
      $('<a />', {href: course.url, target: '_blank', 'class':'btn btn-primary', text: 'See Course'}).appendTo(div);
    
    });

  }

});