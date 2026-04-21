//MoiraHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Moria-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Moira’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Moira’s Abilities";
    }
  }
