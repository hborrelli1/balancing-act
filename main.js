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
  var introBox = document.getElementById("intro-box");
  introBox.classList.add('hidden');

  // Remove introBox once CSS transition is complete
  function hideBox() {
    // Remove element
    introBox.remove();
  }

  setTimeout(hideBox, 500);
}

/*
 * Swap class when clicking on different nav items
 */
dashboard.addEventListener('click', activateDashboard);
transactions.addEventListener('click', activateTransactions);

// Add active class to Dashboard nav item
function activateDashboard() {
  profile.classList.remove('active');
  transactions.classList.remove('active');
  dashboard.classList.add('active');
}

// add active to transactions nav item
function activateTransactions() {
  dashboard.classList.remove('active');
  profile.classList.remove('active');
  transactions.classList.add('active');
}
