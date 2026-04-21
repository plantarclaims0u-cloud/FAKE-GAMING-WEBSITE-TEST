//KirikoHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Mercy-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Mercy’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Mercy’s Abilities";
    }
  }
