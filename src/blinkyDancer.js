
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeBlinkyDancer.prototype)
  makeDancer.apply(this, arguments);
  // this.$node = $(`<img class="motion" src="images/drums.png" height="100" width="auto"></img>`);
  // this.setPosition(top, left, (Math.random() * 100));
  // return this
};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(time) {
  // setTimeout(this.step.bind(this), time); // how do we use the makeDancer.step and bindMakeBlinkyDancer to it properly?
  // console.log('function to call ', makeDancer.prototype.step);
  Object.getPrototypeOf(makeBlinkyDancer.prototype).step.call(this, time);
  // makeDancer.prototype.step.call(makeBlinkyDancer);
  this.$node.toggle();
  if (this.boolean) {
    this.setPosition($("body").height() * Math.random() ,$("body").width() * Math.random());
  }
};

// makeBlinkyDancer.prototype.setPosition = function(top, left, size) {
//   var styleSettings = {
//     position: 'absolute',
//     top: top,
//     left: left,
//     border: `initial`,
//     borderRadius: `initial`,
//   };
//   this.$node.css(styleSettings);
// };

/*
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};
*/