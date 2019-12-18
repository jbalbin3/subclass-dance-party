$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log('1 ', dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log('w ',window);
    // make a dancer with a random position
    // console.log('2 ', dancerMakerFunction);
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      true
    );
    // console.log('1 ', dancer.step);
    // console.log('1 ', dancer.setPosition);
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });




  // dancer.step(0, true, 'should be calling MID');
  let inlineToggle = true;
  // let previousPosition = [];
  $('.inline-dancers').on('click', function(event) {
    // toggle
    if (inlineToggle === true) {
      inlineToggle = false;


      let width = $('body').width() / window.dancers.length;
      for (var i=0; i < window.dancers.length; i++) {
        console.log('which function ', window.dancers[i].step);
        window.dancers[i].boolean = false;
        window.dancers[i].setPosition('80%', width * i); // ($('body').width() * .75) / ((i+1) * )
        // window.dancers[i].prototype.prototype.setPosition(10 * i, 10 * i);
        // makeInsaneDancer.prototype.step(0, true);
        // makeInsaneDancer.prototype.setPosition.call(window.dancers[i], 10 * i, 10 * i);
        // var position = $(val.$node).position();
        // previousPosition.push(position.left);
        // $(val.$node).offset({top: position.top, left: 0});
      }
    } else {
      inlineToggle = true;
      window.dancers.forEach( function (e) {
        e.boolean = true;
        e.step(Math.random() * 1000);
      });

      // call step with random time
      // makeInsaneDancer.prototype.step(Math.random() * 1000, false);
    }


    // if toggle is true (inline)
      // iterate window.dancers
        // previousPosition.push(css left)
        // inline css left attribute = 0;
    // else
      // iterate window.dancers
        // inline css left = previousPosition.shift()
  });
});

