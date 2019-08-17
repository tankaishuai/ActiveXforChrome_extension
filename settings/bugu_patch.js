(function() {
  function __bugupatch() {
    if (typeof cntv != 'undefined') {
      cntv.player.util.getPlayerCore = function(orig) {
        return function() {
          var ret = orig();
          if (arguments.callee.caller.toString().indexOf('GetPlayerControl') != -1) {
            return {
              GetVersion: ret.GetVersion,
              GetPlayerControl: ret.GetPlayerControl()
            };
          } else {
            return ret;
          };
        }
      } (cntv.player.util.getPlayerCore);
      console.log('buguplayer patched');
      window.removeEventListener('beforeload', __bugupatch, true);
    }
  }
  window.addEventListener('beforeload', __bugupatch, true);
})()