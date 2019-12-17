
var makeWeirdDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeWeirdDancer.prototype)
  // make unique
  makeDancer.apply(this, arguments);
  this.setPosition(top, left, (Math.random() * 100));
  // return this
};
makeWeirdDancer.prototype = Object.create(makeDancer.prototype);
makeWeirdDancer.prototype.constructor = makeWeirdDancer;

makeWeirdDancer.prototype.step = function(time) {
  Object.getPrototypeOf(makeWeirdDancer.prototype).step.call(this, time);
  this.$node.toggle();
};

makeWeirdDancer.prototype.setPosition = function(top, left, size) {
  console.log('size', size);
  var styleSettings = {
    top: top,
    left: left,
    border: `${size}px solid blue`,
    borderRadius: `${size}px`,
  };
  this.$node.css(styleSettings);
}
/*
var makeWeirdDancer = function(top, left, timeBetweenSteps) {
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