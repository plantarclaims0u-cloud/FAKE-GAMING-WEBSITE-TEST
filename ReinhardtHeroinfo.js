//ReinhardtHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Reinhardt-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Reinhardt’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Reinhardt’s Abilities";
    }
  }
