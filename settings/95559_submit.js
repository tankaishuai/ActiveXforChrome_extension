window.addEventListener('DOMContentLoaded', function() {
  if (window.logonSubmit) {
    logonSubmit = function(orig) {
      return function() {
        try {
          orig();
        } catch (e) {
          if (e.message == 'Error calling method on NPObject.') {
            // We assume it has passed the checking.
            frmLogon.submit();
            clickBoolean = false;
          }
        }
      }
    }(logonSubmit);
  }
}, false);
