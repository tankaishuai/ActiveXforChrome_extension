window.addEventListener('load', function() {
delete FrmUserInfo.elements;
FrmUserInfo.elements = function(x){return this[x]};
console.log('cloudzz patch');
onAuthenticated();
}, false);
HTMLElement.prototype.insertAdjacentHTML = function(orig) {
return function() {
this.style.display = "block";
this.style.overflow = "hidden";
orig.apply(this, arguments);
}
}(HTMLElement.prototype.insertAdjacentHTML);