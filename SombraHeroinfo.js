//SombraHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Sombra-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Sombra’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Sombra’s Abilities";
    }
  }

