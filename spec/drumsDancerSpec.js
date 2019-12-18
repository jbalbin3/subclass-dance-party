describe('drumsDancer', function() {

  var drumsDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    drumsDancer = new makeDrumsDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(drumsDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes it move', function() {
    sinon.spy(drumsDancer, 'setPosition');
    drumsDancer.boolean = true;
    drumsDancer.step();
    expect(drumsDancer.setPosition.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(drumsDancer, 'step');
      expect(drumsDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(drumsDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(drumsDancer.step.callCount).to.be.equal(2);
    });
  });
});
