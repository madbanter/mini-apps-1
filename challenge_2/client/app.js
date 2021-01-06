// var $ = ('jquery.min.js');

var app = document.getElementById('app');

var form = document.createElement('form');
var label = document.createElement('label');
var labelText = document.createTextNode('JSON input:');
var submit = document.createElement('input');
var textArea = document.createElement('textarea');
var BR = document.createElement("BR");
var BR2 = document.createElement("BR");

form.appendChild(label);
form.appendChild(BR2);
form.appendChild(textArea);
form.appendChild(BR);
form.appendChild(submit);
form.setAttribute('action', '/upload_json');
form.setAttribute('method', 'POST');

label.setAttribute('for', 'text');
label.appendChild(labelText);

textArea.setAttribute('name', 'textInput');

submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Submit');

app.append(form);

$('form').on('submit', function(e) {
  let fieldData = $('textarea[name=textInput]').val();
  console.log(fieldData);
  $.ajax({method: 'POST', url: '/upload_json', data: {text: fieldData}});
  e.preventDefault();
});