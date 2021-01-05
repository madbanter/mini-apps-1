var app = document.getElementById('app');

var form = document.createElement('form');
var input = document.createElement('input');
var inputText = document.createElement('input');
form.appendChild(inputText);
form.appendChild(input);
inputText.setAttribute('type', 'text');
input.setAttribute('type', 'submit');
input.setAttribute('value', 'Submit');
form.setAttribute('action', '/upload_json');
form.setAttribute('method', 'POST');
app.append(form);

