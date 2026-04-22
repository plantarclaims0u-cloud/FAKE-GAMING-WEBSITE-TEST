//ZaryaHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Zarya-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Zarya’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Zarya’s Abilities";
    }
  }
