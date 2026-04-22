//WidowmakerHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Widowmaker-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Widowmaker’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Widowmaker’s Abilities";
    }
  }
