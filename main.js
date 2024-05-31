document.addEventListener('DOMContentLoaded', (event) => {
  var typed = new Typed(".text", {
      strings: ["Game Developer", "3D Modelling", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
  });
});

function openModal(modalId, event) {
    event.preventDefault(); // Prevent default link behavior
    var modal = document.getElementById(modalId);
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;
  }

  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }