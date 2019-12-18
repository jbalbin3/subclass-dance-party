// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, bVal=true) {
  // this = Object.create(makeDancer.prototype)
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.boolean = bVal;
  // invokation of functions
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
  // return this
};

makeDancer.prototype.step = function(time) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  if(this.boolean) {
    setTimeout(this.step.bind(this, time), time);
  }

};


makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    position: 'absolute',
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(input, width) {
  this.boolean = false;
  this.setPosition('80%', width * input);
};
