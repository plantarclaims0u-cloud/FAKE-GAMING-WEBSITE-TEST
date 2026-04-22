//JunkratHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Junkrat-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Junkrat’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Junkrat’s Abilities";
    }
  }
