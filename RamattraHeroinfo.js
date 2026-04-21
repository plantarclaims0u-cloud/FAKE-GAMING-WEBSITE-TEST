//DvaHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Ramattra-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Ramattra’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Ramattra’s Abilities";
    }
  }
