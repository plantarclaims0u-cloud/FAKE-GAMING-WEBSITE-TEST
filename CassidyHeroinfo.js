//CassidyHeroinfo .js file


  function toggleAbilities() {
    var abilities = document.getElementById("Cassidy-Abilities");
    var button = document.getElementById("showButton");

    if (abilities.style.display === "none" || abilities.style.display === "") {
      abilities.style.display = "flex";
      button.innerHTML = "Hide Cassidy’s Abilities";
    } else {
      abilities.style.display = "none";
      button.innerHTML = "Show Cassidy’s Abilities";
    }
  }
