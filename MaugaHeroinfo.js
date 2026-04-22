//MaugaHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Mauga-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Mauga’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Mauga’s Abilities";
    }
  }
