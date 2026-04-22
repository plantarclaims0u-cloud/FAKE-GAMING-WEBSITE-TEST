//DoomfistHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Doomfist-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Doomfist’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Doomfist’s Abilities";
    }
  }
