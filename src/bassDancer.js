
var makeBassDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeBassDancer.prototype)
  makeDancer.apply(this, arguments);
  this.$node = $(`<img class="motion" src="images/bass.png" height="100" width="auto">`);
  this.setPosition(top, left, (Math.random() * 100));
  // return this
};
makeBassDancer.prototype = Object.create(makeDancer.prototype);
makeBassDancer.prototype.constructor = makeBassDancer;

makeBassDancer.prototype.step = function(time) {
  Object.getPrototypeOf(makeBassDancer.prototype).step.call(this, time);
  // this.$node.toggle();

  if (this.boolean) {
    this.setPosition($("body").height() * Math.random() ,$("body").width() * Math.random());
  }
};

makeBassDancer.prototype.setPosition = function(top, left, size) {
  var styleSettings = {
    position: 'absolute',
    top: top,
    left: left,
    border: `initial`,
    borderRadius: `initial`,
  };
  this.$node.css(styleSettings);
};
