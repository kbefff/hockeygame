/*JavaScript*/

  //<button id="reset">
  //<button id="teamone-shoot">
  //<button id="teamtwo-shoot">
(function() {



  //////////////////////TEAM ONE///////////////////////////////////
  let teamOne = document.querySelector("#teamone-shoot");
  console.log(teamOne);
  let teamOneShoot = document.querySelector("#teamone-numshots");
  console.log(teamOneShoot);
  let goalsOne = document.querySelector("#teamone-numhits");
  console.log(goalsOne);
  let goalsTwo = document.querySelector("#teamtwo-numhits");
  console.log(goalsTwo);






  teamOne.addEventListener("click", function() {

    console.log(teamOneShoot.innerHTML)
    teamOneShoot.innerHTML = parseInt(teamOneShoot.innerHTML) + 1;


    console.log(Math.random())
      if (Math.random() > .7) {
      goalsOne.innerHTML = parseInt(goalsOne.innerHTML) + 1;
    }

  })











  //////////////////////TEAM TWO///////////////////////////////////
  let teamTwo = document.querySelector("#teamtwo-shoot");
  console.log(teamTwo);
  let teamTwoShoot = document.querySelector("#teamtwo-numshots");
  console.log(teamTwoShoot);
  //var audio = new Audio('..sound/hit.mp3');
  ///var audio = document.createElement("audio");
  ///audio.src = '..sound/hit.mp3';
  ///audio.play();




  teamTwo.addEventListener("click", function() {

    console.log(teamTwoShoot.innerHTML)
    teamTwoShoot.innerHTML = parseInt(teamTwoShoot.innerHTML) + 1;




    console.log(Math.random())
      if (Math.random() < .4) {
      goalsTwo.innerHTML = parseInt(goalsTwo.innerHTML) + 1;
    }

  })
//mySound = new Audio([URLString]);
//////////////////////RESET///////////////////////////////////
  let reset = document.querySelector("#reset");
  console.log(reset);
  let numReset = document.querySelector("#num-resets");
  console.log(reset);



  reset.addEventListener("click", function() {

    console.log(teamOneShoot.innerHTML)
    teamOneShoot.innerHTML = 0;
    console.log(teamTwoShoot.innerHTML)
    teamTwoShoot.innerHTML = 0;

    console.log(goalsOne.innerHTML)
    goalsOne.innerHTML = 0;
    console.log(goalsTwo.innerHTML)
    goalsTwo.innerHTML = 0;

    console.log(numReset.innerHTML)
    numReset.innerHTML = parseInt(numReset.innerHTML) + 1;

//////////////////////GOAL///////////////////////////////////
  })

})();
