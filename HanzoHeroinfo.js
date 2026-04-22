//HanzoHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("hanzo-abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Hanzo’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Hanzo’s Abilities";
    }
  }
