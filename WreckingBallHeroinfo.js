//WreckingBallHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("wrecking-ball-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide WreckingBall’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show WreckingBall’s Abilities";
    }
  }
