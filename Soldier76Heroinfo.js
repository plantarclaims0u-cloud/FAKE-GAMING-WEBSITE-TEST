//Soldier76Heroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Soldier76-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Soldier76’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Soldier76’s Abilities";
    }
  }
