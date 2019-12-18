describe('guitarDancer', function() {

  var guitarDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    guitarDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(guitarDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes it move', function() {
    sinon.spy(guitarDancer, 'setPosition');
    guitarDancer.boolean = true;
    guitarDancer.step();
    expect(guitarDancer.setPosition.called).to.be.true;
  });

  it('should move into a line and call set a new position during a lineUp call', function() {
    sinon.spy(guitarDancer, 'setPosition');
    guitarDancer.lineUp(1,1);
    expect(guitarDancer.setPosition.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(guitarDancer, 'step');
      expect(guitarDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(guitarDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(guitarDancer.step.callCount).to.be.equal(2);
    });
  });
});
