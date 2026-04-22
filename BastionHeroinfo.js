//BastionHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Bastion-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Bastion’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Bastion’s Abilities";
    }
  }
