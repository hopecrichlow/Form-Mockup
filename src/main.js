(function () {

  let url = 'http://json-data.herokuapp.com/forms'
  var templateString = $('#itemTemplate').text();
  var templateFunction = _.template(templateString);


  //Grabbing Data to do something with it

  var promise = $.getJSON(url);
  promise.then ( function (res) {
    doSomething(res);  
  });

  //Template

  let textInput = function (obj) {
    let template = `
    <div class="text-input">
    <input value="" type="${obj.type}" placeholder="${obj.label}" id="${obj.id}">
    <i class="fa ${obj.icon}"></i>
    <""

    </div>
    `;
    return template;

  }


  //Our function to use data

  let doSomething = function (arr) {

    _.each(arr, function (item) {
      var htmlBlock;

      if (item.type === 'text' || item.type === 'tel' || item.type === 'email') {
        htmlBlock = textInput(item);
      }

      $('form').append(htmlBlock);

    });

  };





}());


