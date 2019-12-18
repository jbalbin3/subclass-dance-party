
var makeDrumsDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeDrumsDancer.prototype)
  makeDancer.apply(this, arguments);
  this.$node = $(`<img class="motion" src="images/drums.png" height="100" width="auto"></img>`);
  this.setPosition(top, left, (Math.random() * 100));
  // return this
};
makeDrumsDancer.prototype = Object.create(makeDancer.prototype);
makeDrumsDancer.prototype.constructor = makeDrumsDancer;

makeDrumsDancer.prototype.step = function(time) {
  Object.getPrototypeOf(makeDrumsDancer.prototype).step.call(this, time);
  // this.$node.toggle();
  if (this.boolean) {
    this.setPosition($("body").height() * Math.random() ,$("body").width() * Math.random());
  }
};

makeDrumsDancer.prototype.setPosition = function(top, left, size) {
  var styleSettings = {
    position: 'absolute',
    top: top,
    left: left,
    border: `initial`,
    borderRadius: `initial`,
  };
  this.$node.css(styleSettings);
};
