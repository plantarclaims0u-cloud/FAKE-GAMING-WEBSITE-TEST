//LucioHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Lucio-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Lucio’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Lucio’s Abilities";
    }
  }
