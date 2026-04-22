//VendettaHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Vendetta-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Vendetta’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Vendetta’s Abilities";
    }
  }
