(function () {
  function patch() {
    if (window.ShowPayPage && window.InitControls) {
      InitControls = function(orig) {
        return function() {
          if (CreditCardYear.object === undefined) {
            CreditCardYear.object = {};
          }
          if (CreditCardMonth.object === undefined) {
            CreditCardMonth.object = {};
          }
          if (CreditCardCVV2.object === undefined) {
            CreditCardCVV2.object = {};
          }
          orig();
        }
      } (InitControls);
      ShowPayPage = function(orig) {
        return function(par) {
          orig(par);
          InitControls();
        }
      } (ShowPayPage);
      DoSubmit = function(orig) {
        return function(par) {
          if (!CardPayNo.Option) {
            CardPayNo.Option = function() {};
          }
          orig(par);
        }
      } (DoSubmit);
    }
    if (window.OpenWnd) {
      var inputs = document.querySelectorAll('div > input[type=hidden]');
      for (var i = 0; i < inputs.length; ++i) {
        window[inputs[i].name] = inputs[i];
      }
    }
    function patchLoginSwitch(fncName) {
      if (!(window[fncName])) {
        return;
      }
      window[fncName] = function(orig) {
        return function(par) {
          orig(par);
          MobileNo_Ctrl.PasswdCtrl = false;
          EMail_Ctrl.PasswdCtrl = false;
          NetBankUser_Ctrl.PasswdCtrl = false;
          DebitCardNo_Ctrl.PasswdCtrl = false;
          CreditCardNo_Ctrl.PasswdCtrl = false;
          IdNo_Ctrl.PasswdCtrl = false;
          BookNo_Ctrl.PasswdCtrl = false;
        }
      } (window[fncName]);
    }
    patchLoginSwitch('changeCreditCardLoginType');
    patchLoginSwitch('changeEALoginType');
    patchLoginSwitch('showLoginEntry');

    CallbackCheckClient = function() {};
  }
  if (document.readyState == 'complete') {
    patch();
  } else {
    window.addEventListener('load', patch, false);
  }
})();
