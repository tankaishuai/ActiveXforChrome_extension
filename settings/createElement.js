(function (doc) {
  doc.createElement = function(orig) {
    return function(name) {
      if (name.trim()[0] == '<') {
        // We assume the name is correct.
        document.head.innerHTML += name;
        var obj = document.head.lastChild;
        document.head.removeChild(obj);
        return obj;
      } else {
        var val = orig.call(this, name);
        if (name == "object") {
          val.setAttribute("type", "application/x-itst-activex");
        }
        return val;
      }
    }
  }(doc.createElement);
})(HTMLDocument.prototype);
