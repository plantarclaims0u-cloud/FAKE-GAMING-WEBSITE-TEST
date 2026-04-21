//BrigitteHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Brigitte-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Brigitte’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Brigitte’s Abilities";
    }
  }
