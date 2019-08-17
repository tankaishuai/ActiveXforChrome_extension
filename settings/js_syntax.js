window.addEventListener('error', function(event) {
  function executeScript(file) {
    var request = new XMLHttpRequest();
    // In case it needs immediate loading, use sync ajax.
    request.open('GET', file, false);
    request.send();
    eval(translate(request.responseText));
  }
  function translate(text) {
    text = text.replace(/function ([\w]+\.[\w\.]+)\(/, "$1 = function (");
    return text;
  }
  if (event.message == 'Uncaught SyntaxError: Unexpected token .') {
    executeScript(event.filename);
  }
}, true);
