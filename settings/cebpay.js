document.addEventListener('DOMContentLoaded', function() {
  if (window.doLogin && window.statcus && window.psw) {
    function makeHidden(obj) {
      obj.style.display = 'block';
      obj.style.height = '0px';
      obj.style.width = '0px';
    }
    window.doLogin = function(orig) {
      return function() {
        if (statcus.style.display == 'none') {
          makeHidden(statcus);
        }
        if (psw.style.display == 'none') {
          makeHidden(psw);
        }
        orig();
      };
    }(doLogin);
  }
}, false);
