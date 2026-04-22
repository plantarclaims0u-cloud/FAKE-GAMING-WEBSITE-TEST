//RoadhogHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Roadhog-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Roadhog’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Roadhog’s Abilities";
    }
  }
