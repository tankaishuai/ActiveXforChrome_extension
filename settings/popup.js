
(function(node) {
  node.createPopup = node.createPopup || function() {
    var SetElementStyles = function(element, styleDict) {
      var style = element.style;
      for (var styleName in styleDict) {
        style[styleName] = styleDict[styleName];
      }
    }
    var eDiv = document.createElement('div');
    SetElementStyles(eDiv, {
      'position': 'absolute',
      'top': 0 + 'px',
      'left': 0 + 'px',
      'width': 0 + 'px',
      'height': 0 + 'px',
      'zIndex': 1000,
      'display': 'none',
      'overflow': 'hidden'
    });
    eDiv.body = eDiv;
    eDiv.write = function(string) {
      eDiv.innerHTML += string;
    }
    var opened = false;
    var setOpened = function(b) {
      opened = b;
    }
    var getOpened = function() {
      return opened;
    }
    var getCoordinates = function(oElement) {
      var coordinates = {
        x: 0,
        y: 0
      };
      while (oElement) {
        coordinates.x += oElement.offsetLeft;
        coordinates.y += oElement.offsetTop;
        oElement = oElement.offsetParent;
      }
      return coordinates;
    }

    return {
      htmlTxt: '',
      document: eDiv,
      isOpen: getOpened(),
      isShow: false,
      hide: function() {
        SetElementStyles(eDiv, {
          'top': 0 + 'px',
          'left': 0 + 'px',
          'width': 0 + 'px',
          'height': 0 + 'px',
          'display': 'none'
        });
        eDiv.innerHTML = '';
        this.isShow = false;
      },
      show: function(iX, iY, iWidth, iHeight, oElement) {
        if (!getOpened()) {
          document.body.appendChild(eDiv);
          setOpened(true);
        };
        this.htmlTxt = eDiv.innerHTML;
        if (this.isShow) {
          this.hide();
        };
        eDiv.innerHTML = this.htmlTxt;
        var coordinates = getCoordinates(oElement);
        eDiv.style.top = (iX + coordinates.x) + 'px';
        eDiv.style.left = (iY + coordinates.y) + 'px';
        eDiv.style.width = iWidth + 'px';
        eDiv.style.height = iHeight + 'px';
        eDiv.style.display = 'block';
        this.isShow = true;
      }
    }
  }
})(window.__proto__);
