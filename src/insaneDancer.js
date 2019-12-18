
var makeInsaneDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeInsaneDancer.prototype)
  // make unique
  makeDancer.apply(this, arguments);
  this.$node = $(`<img class="motion" src="images/Flame_Electric_Guitar.png" height="100" width="auto">`);
  this.setPosition(top, left, (Math.random() * 100));
  // return this
};
makeInsaneDancer.prototype = Object.create(makeDancer.prototype);
makeInsaneDancer.prototype.constructor = makeInsaneDancer;

makeInsaneDancer.prototype.step = function(time) {
  // console.log('2 ', this);
  Object.getPrototypeOf(makeInsaneDancer.prototype).step.call(this, time); // makeDancer
  // this.$node.toggle();
  // this.$node.animate({
  //   right: '500px',
  // }, time);
  // boolean = true;
  // console.log('insane this ', this);
  // console.log('insane boolean', this.boolean);
  if (this.boolean) {
    this.setPosition($("body").height() * Math.random() ,$("body").width() * Math.random());
  }
  // this.setPosition($("body").height() * Math.random() ,$("body").width() * Math.random());
};

makeInsaneDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    position: 'absolute',
    top: top,
    left: left,
    border: `initial`,
    borderRadius: `initial`
  };
  // console.log('insane this ', this);
  this.$node.css(styleSettings);
};
