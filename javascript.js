document.addEventListener("DOMContentLoaded", function () {
  var favoriteButton = document.querySelector(".favorite");

  favoriteButton.addEventListener("click", function () {
    // Simuler l'ajout aux favoris (ceci est juste un exemple)
    console.log("Ajouté aux favoris!");
    alert("Vous n'avez pas de droit de le mofitifier!");
  });
});

function registerUser() {
  alert("Formulaire d'inscription ouvert!");
  console.log("Processus d'inscription initié.");
}
