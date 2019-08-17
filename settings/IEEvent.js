(function() {
  function declareEventAsIE(node) {
    if (!node.attachEvent) {
      node.attachEvent = function(event, operation) {
        if (event.substr(0, 2) == "on") this.addEventListener(event.substr(2), operation, false)
      }
    }
    if (!node.detachEvent) {
      node.detachEvent = function(event, operation) {
        if (event.substr(0, 2) == "on") this.removeEventListener(event.substr(2), operation, false)
      }
    }
  }
  declareEventAsIE(window.Node.prototype);
  declareEventAsIE(window.__proto__);
})();
