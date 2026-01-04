//KirikoHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("kirikoAbilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "my farts stink";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Kiriko’s Abilities";
    }
  }





