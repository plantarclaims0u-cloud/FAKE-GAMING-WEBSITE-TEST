//SymettraHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Symmetra-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Symmetra’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Symmetra’s Abilities";
    }
  }
