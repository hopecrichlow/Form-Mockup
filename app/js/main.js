'use strict';

(function () {

  var url = 'http://json-data.herokuapp.com/forms';
  var templateString = $('#itemTemplate').text();
  var templateFunction = _.template(templateString);

  //Grabbing Data to do something with it

  var promise = $.getJSON(url);
  promise.then(function (res) {
    doSomething(res);
  });

  //Template

  var textInput = function textInput(obj) {
    var template = '\n    <div class="text-input">\n    <input value="" type="' + obj.type + '" placeholder="' + obj.label + '" id="' + obj.id + '">\n    <i class="fa ' + obj.icon + '"></i>\n    <""\n\n    </div>\n    ';
    return template;
  };

  //Our function to use data

  var doSomething = function doSomething(arr) {

    _.each(arr, function (item) {
      var htmlBlock;

      if (item.type === 'text' || item.type === 'tel' || item.type === 'email') {
        htmlBlock = textInput(item);
      }

      $('form').append(htmlBlock);
    });
  };
})();