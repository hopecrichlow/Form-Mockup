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
    <input type="${obj.type}" placeholder="${obj.label}" id="${obj.id}">
    </div>
    `;
    return template;

  }

  let selectInput = function (obj) {
      let addedOptions = '';

      obj.options.forEach(function (options) {
        addedOptions += `<option value="${options.value}" label="{options.label}"></option>`;
      });

    let select = `
    <div class="select-input">
    <select type="${obj.type}" placeholder= "${obj.label}" id="${obj.id}">
    <option value="">Select Language...</option>
      $(addedOptions) 
    </select>
    </div>
    `;
    return select;    

  }


  //Our function to use data

  let doSomething = function (arr) {

    _.each(arr, function (item) {
      var htmlBlock;

      if (item.type === 'text' || item.type === 'tel' || item.type === 'email' || item.type === 'textarea') {
        htmlBlock = textInput(item);
      } else if (item.type === 'select') {
        htmlBlock = selectInput(item);
      }

      $('.form').append(htmlBlock);

    });

  };





}());
