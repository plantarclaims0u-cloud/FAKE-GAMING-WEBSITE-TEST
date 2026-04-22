//EchoHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Echo-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Echo’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Echo’s Abilities";
    }
  }
