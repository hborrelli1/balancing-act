function closeIntro() {
  // document.getElementById("intro-box").style.display = 'none';
  document.getElementById("intro-box").classList.add('hidden');

  function hideBox() {
    document.getElementById("intro-box").style.display = "none";
  }

  setTimeout(hideBox, 500);
}
