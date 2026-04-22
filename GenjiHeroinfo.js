//GenjiHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Genji-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Genji’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Genji’s Abilities";
    }
  }
