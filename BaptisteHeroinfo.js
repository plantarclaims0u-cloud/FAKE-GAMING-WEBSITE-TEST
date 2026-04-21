//BaptisteHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Baptiste-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Baptiste’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Baptiste’s Abilities";
    }
  }
