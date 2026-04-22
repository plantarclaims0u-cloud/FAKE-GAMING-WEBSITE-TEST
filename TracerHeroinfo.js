//TracerHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Tracer-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Tracer’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Tracer’s Abilities";
    }
  }
