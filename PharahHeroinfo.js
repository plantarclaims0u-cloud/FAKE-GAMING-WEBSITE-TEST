//PharahHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("pharah-abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Pharah’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Pharah’s Abilities";
    }
  }
