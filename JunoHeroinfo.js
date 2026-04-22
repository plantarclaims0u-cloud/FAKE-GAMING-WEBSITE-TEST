//JunoHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Juno-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Juno’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Juno’s Abilities";
    }
  }
