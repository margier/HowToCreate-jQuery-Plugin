
// provide the $.fn with our function
// return 'this' and add scope to use jquery alias (immediately invoked func expression)
(function ( $ ) {
$.fn.highlight = function ( options ) {
  this.css('background-color', options.backgroundColor);
  return this;
}
}( jQuery ));
