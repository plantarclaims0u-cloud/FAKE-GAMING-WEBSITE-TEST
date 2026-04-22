//FrejaHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Freja-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Freja’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Freja’s Abilities";
    }
  }
