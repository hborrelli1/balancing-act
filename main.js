var closeBtn = document.querySelector('#close');
var dashboard = document.querySelector('#dashboard');
var transactions = document.querySelector('#transactions');
var profile = document.querySelector('#profile');

/*
 * Close Intro Box Even Listener and Function
 */
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

/*
 * Swap class when clicking on different nav items
 */
dashboard.addEventListener('click', activateDashboard);
transactions.addEventListener('click', activateTransactions);

function activateDashboard() {
  profile.classList.remove('active');
  transactions.classList.remove('active');
  dashboard.classList.add('active');
}

function activateTransactions() {
  dashboard.classList.remove('active');
  profile.classList.remove('active');
  transactions.classList.add('active');
}
