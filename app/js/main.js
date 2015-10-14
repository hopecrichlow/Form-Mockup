'use strict';

(function () {

  var url = 'http://json-data.herokuapp.com/forms';
  // var templateString = $('#itemTemplate').text();
  // var templateFunction = _.template(templateString);

  //Grabbing Data to do something with it

  var promise = $.getJSON(url);
  promise.then(function (res) {
    doSomething(res);
  });

  //Template

  var textInput = function textInput(obj) {
    var template = '\n    <div class="text-input">\n    <input type="' + obj.type + '" placeholder="' + obj.label + '" id="' + obj.id + '">\n    </div>\n    ';
    return template;
  };

  var selectInput = function selectInput(obj) {
    var addedOptions = '';

    obj.options.forEach(function (options) {
      addedOptions += '<option value="' + options.value + '">' + options.label + '</option>';
    });

    var select = '\n    <div class="select-input">\n    <select type="' + obj.type + '" placeholder= "' + obj.label + '" id="' + obj.id + '">\n    <option value="">Select Language...</option>\n      ' + addedOptions + ' \n    </select>\n    </div>\n    ';
    return select;
  };

  //Our function to use data

  var doSomething = function doSomething(arr) {

    _.each(arr, function (item) {
      var htmlBlock;

      if (item.type === 'text' || item.type === 'tel' || item.type === 'email' || item.type === 'textarea') {
        htmlBlock = textInput(item);

      } else if (item.type === 'select') {
        htmlBlock = selectInput(item);
      }

      $('form').append(htmlBlock);
    });
  };
})();
