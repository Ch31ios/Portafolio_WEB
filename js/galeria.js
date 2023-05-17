document.addEventListener("DOMContentLoaded", function(event) {
    const modal = document.querySelector(".modal");
    const modalContent = document.getElementById("modal-image");
    const galleryImages = document.querySelectorAll(".gallery-image");
    const closeButton = document.querySelector(".close");
  
    galleryImages.forEach(function(image) {
      image.addEventListener("click", function() {
        modal.style.display = "flex";
        modalContent.src = this.src;
        });
    });
  
    closeButton.addEventListener("click", function() {
      modal.style.display = "none";
    });
    
    modal.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";     
        }
    });
});