//OrisaHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Orisa-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Orisa’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Orisa’s Abilities";
    }
  }
