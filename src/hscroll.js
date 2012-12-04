var ev = require('event');

module.exports = function (element, container) {
  ev.bind(element, 'mousewheel', function (e) {
    var scroll = e.wheelDelta *= 0.1;
    var left = container.style.left;
    if(!left.length) left = '0px';
    left = parseInt(left.match(/(.*?)px/i)[1]);
    if(e.wheelDelta <= 0) left -= Math.abs(scroll);
    else left += scroll;
    if(left > 0) left = 0;
    container.style.left = interpolate('%spx', left);
    e.preventDefault();
  });
};