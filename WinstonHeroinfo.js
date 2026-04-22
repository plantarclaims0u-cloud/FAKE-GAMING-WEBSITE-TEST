//WinstonHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Winston-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Winston’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Winston’s Abilities";
    }
  }
