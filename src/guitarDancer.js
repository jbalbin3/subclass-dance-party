
var makeGuitarDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeGuitarDancer.prototype)
  makeDancer.apply(this, arguments);
  this.$node = $(`<img class="motion" src="images/Flame_Electric_Guitar.png" height="100" width="auto">`);
  this.setPosition(top, left, (Math.random() * 100));
  // return this
};
makeGuitarDancer.prototype = Object.create(makeDancer.prototype);
makeGuitarDancer.prototype.constructor = makeGuitarDancer;

makeGuitarDancer.prototype.step = function(time) {
  Object.getPrototypeOf(makeGuitarDancer.prototype).step.call(this, time); // makeDancer
  // this.$node.animate({
  //   right: '500px',
  // }, time);
  if (this.boolean) {
    this.setPosition($("body").height() * Math.random() ,$("body").width() * Math.random());
  }
};

makeGuitarDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    position: 'absolute',
    top: top,
    left: left,
    border: `initial`,
    borderRadius: `initial`
  };
  this.$node.css(styleSettings);
};
