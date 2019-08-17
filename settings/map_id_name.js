(function() {
  function reload() {
    var maps = document.getElementsByTagName("map");
    for (var i = 0; i < maps.length; ++i) {
      if (maps[i].name == "") maps[i].name = maps[i].id;
    }
  }
  if (document.readyState == 'complete') {
    reload();
  } else {
    window.addEventListener('load', reload, false);
  }
})();