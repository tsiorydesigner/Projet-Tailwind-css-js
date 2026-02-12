function goToPage() {
    window.location.href = "sign_in.html";
  }
  
  // Détecter la touche Entrée sur tout le document
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      goToPage();
    }
  });
 