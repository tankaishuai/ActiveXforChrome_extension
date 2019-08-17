(function() {
  Document.prototype.getElementById = function(orig) {
    return function(id) {
      var a = this.getElementsByName(id);
      if (a.length > 0) {
        return a[0];
      }
      return orig.call(this, id);
    }
  } (Document.prototype.getElementById);
})();
