//AsheHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Ashe-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Ashe’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Ashe’s Abilities";
    }
  }
