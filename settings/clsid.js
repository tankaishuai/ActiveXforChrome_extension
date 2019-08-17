(function(proto) {
  proto.__defineGetter__("classid", function() {
    var clsid = this.getAttribute("clsid");
    if (clsid == null) {
      return "";
    }
    return "CLSID:" + clsid.substring(1, clsid.length - 1);
  })
  proto.__defineSetter__("classid", function(value) {
    var e = document.createEvent('TextEvent');
    e.initTextEvent(
      '__npactivex_log_event__', false, false, window, 
      'edit clsid ' + value);
    window.dispatchEvent(e);

    var oldstyle = this.style.display;
    this.style.display = "none";
    var pos = value.indexOf(":");
    this.setAttribute("clsid", "{" + value.substring(pos + 1) + "}");
    this.setAttribute("type", "application/x-itst-activex");
    this.style.display = oldstyle;
  })
})(HTMLObjectElement.prototype)
