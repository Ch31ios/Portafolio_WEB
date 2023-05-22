document.addEventListener("DOMContentLoaded", function(event) {
    const modal = document.querySelector(".modal");
    const modal_content = document.getElementById("modal_image");
    const image_1 = document.querySelectorAll(".image_1");
    const close = document.querySelector(".close");
  
    image_1.forEach(function(image) {
      image.addEventListener("click", function() {
        modal.style.display = "flex";
        modal_content.src = this.src;
        });
    });
  
    close.addEventListener("click", function() {
      modal.style.display = "none";
    });
    
    modal.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";     
        }
    });
});