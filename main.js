var closeBtn = document.querySelector("#close");

closeBtn.addEventListener("click", closeIntro);

function closeIntro() {

  // Add class to intro-box that changes margin-top
  document.getElementById("intro-box").classList.add('hidden');

  // Timeout function to add display: none; to box after
  // it slides out of view
  function hideBox() {
    document.getElementById("intro-box").style.display = "none";
  }

  setTimeout(hideBox, 500);
}
