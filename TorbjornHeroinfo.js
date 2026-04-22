//TorbjornHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Torbjorn-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Torbjorn’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Torbjorn’s Abilities";
    }
  }
