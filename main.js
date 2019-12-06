// Global Variables
var closeBtn = document.querySelector('#close');
var dashboardBtn = document.querySelector('#dashboard-btn');
var transactionsBtn = document.querySelector('#transactions-btn');
var profileBtn = document.querySelector('#profile-btn');
var dashboardBody = document.querySelector('#dashboard-content');
// var dashboardContent = document.querySelector('#dashboard-content').innerHTML;
var introBox = document.getElementById("intro-box");
var newTransactionBtn = document.getElementById("new-transaction-btn");
var transactionsContent = document.querySelector('#transactions-content');
var transactionsInnerContent = `<header>
  <h1>Transactions</h1>
  <section class="button-block">
    <button class="button active">All</button>
    <button class="button">Inflow</button>
    <button class="button">Outflow</button>
  </section>
</header>
<section class="column1 card recent-transactions-card">
  <table class="recent-transactions">
    <thead>
      <tr>
        <th>Date</th>
        <th>Account</th>
        <th>Payee</th>
        <th>Inflow</th>
        <th>Outflow</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>10-25-19</td>
        <td>Credit Card</td>
        <td>Target</td>
        <td>-</td>
        <td>$82.35</td>
      </tr>
      <tr>
        <td>10-24-19</td>
        <td>Credit Card</td>
        <td>Express</td>
        <td>-</td>
        <td>$212.14</td>
      </tr>
      <tr>
        <td>10-22-19</td>
        <td>Credit Card</td>
        <td>Paycheck</td>
        <td>$1319.12</td>
        <td>-</td>
      </tr>
      <tr>
        <td>10-21-19</td>
        <td>Credit Card</td>
        <td>Trader Joes</td>
        <td>-</td>
        <td>$54.92</td>
      </tr>
      <tr>
        <td>10-20-19</td>
        <td>Credit Card</td>
        <td>Shell</td>
        <td>-</td>
        <td>$46.23</td>
      </tr>
      <tr>
        <td>10-19-19</td>
        <td>Credit Card</td>
        <td>Rent</td>
        <td>$800.00</td>
        <td>-</td>
      </tr>
      <tr>
        <td>10-19-19</td>
        <td>Credit Card</td>
        <td>Hapa Sushi</td>
        <td>-</td>
        <td>$13.97</td>
      </tr>
      <tr>
        <td>10-18-19</td>
        <td>Credit Card</td>
        <td>Pig Train</td>
        <td>-</td>
        <td>$4.83</td>
      </tr>
      <tr>
        <td>10-18-19</td>
        <td>Checking</td>
        <td>RTD</td>
        <td>-</td>
        <td>$6.00</td>
      </tr>
      <tr>
        <td>10-24-19</td>
        <td>Checking</td>
        <td>Express</td>
        <td>-</td>
        <td>$212.24</td>
      </tr>
      <tr>
        <td>10-24-19</td>
        <td>Checking</td>
        <td>Express</td>
        <td>-</td>
        <td>$212.24</td>
      </tr>
      <tr>
        <td>10-24-19</td>
        <td>Checking</td>
        <td>Express</td>
        <td>-</td>
        <td>$212.24</td>
      </tr>
      <tr>
        <td>10-24-19</td>
        <td>Checking</td>
        <td>Express</td>
        <td>-</td>
        <td>$212.24</td>
      </tr>
      <tr>
        <td>10-24-19</td>
        <td>Checking</td>
        <td>Express</td>
        <td>-</td>
        <td>$212.24</td>
      </tr>
    </tbody>
  </table>
</section>
<section class="column2 card new-transaction-card">
  <header>
    <h2>New Transaction</h2>
  </header>
  <form id="newTransactionForm" class="" action="" method="">
    <label for="type-of">Type of Transaction:</label>
    <select id="transactionType" name="type-of" required>
      <option value="default">- Select One -</option>
      <option value="inflow">Inflow</option>
      <option value="outflow">Outflow</option>
    </select>
    <label for="category">Category:</label>
    <select id="categorySelect" name="category" required>
      <option value="default">- Select One -</option>
      <option value="groceries">Groceries</option>
      <option value="bills">Bills</option>
      <option value="fun-money">Fun Money</option>
      <option value="paycheck">Paycheck</option>
    </select>
    <label for="account-from">Account From:</label>
    <select id="accountFrom" name="account-from" required>
      <option value="default">- Select One -</option>
      <option value="other-option">Checking</option>
      <option value="other-option">Savings</option>
      <option value="other-option">Amazon Credit</option>
      <option value="other-option">Southwest Credit</option>
    </select>
    <label for="payee">Payee:</label>
    <input id="payee" type="text" name="payee" value="" required>
    <label for="amount">Amount:</label>
    <input id="amount" type="text" name="amount" value="" required>
    <label for="memo">Memo (optional):</label>
    <input id="memo" type="text" name="memo" value="">
    <button id="new-transaction-btn" type="button" name='submit'>Log Expense</button>
  </form>
  <p id="message"></p>
</section>`;

// Event Listeners
dashboardBtn.addEventListener('click', activateDashboard);
transactionsBtn.addEventListener('click', activateTransactions);
closeBtn.addEventListener("click", closeIntro);
transactionsContent.addEventListener("click", newTransaction);
// transactionsContent.addEventListener("click", newTransaction);


// Close Intro Box Function
function closeIntro() {
  // Add class to #intro-box that changes margin-top
  introBox.classList.add('hidden');

  // Remove #introBox once CSS transition is complete
  function hideBox() {

    // Remove element
    introBox.remove();
  }

  setTimeout(hideBox, 500);
}

// Activate Dashboard View
function activateDashboard() {

  // Remove classes from other nav items
  profileBtn.classList.remove('active');
  transactionsBtn.classList.remove('active');

  // Add classes to clicked element
  dashboardBtn.classList.add('active');

  // Toggle Content
  transactionsContent.style.display = "none";
  dashboardBody.style.display = "block";
}

// Transactions Events
function newTransaction(event) {
  var messageCloseBtn = document.querySelector('#close-banner');
  var transactionMessage = document.getElementById("message");

  // newTransactionForm.addEventListener('input', removeErrorClass);

  // Post New Transaction
  if (event.target.id === "new-transaction-btn") {
    // Variables
    var inputs = document.querySelectorAll('input');

    // Validate form
    if (validateNewTransaction() == true) {
      // Confirmation Message
      displayTransactionMessage();
    } else {
      return false;
    }
    // validateNewTransaction();

  }

  if (event.target.id === 'close-banner') {
    removeTransactionMessage();
  }

  function displayTransactionMessage() {
    // Confirmation Message
    var confirmMessage = `<span>You expense of $87 has been logged.</span><img id="close-banner" src="assets/close.svg" alt="Close">`;

    // Add class for styling transition
    transactionMessage.innerHTML = confirmMessage;
    transactionMessage.classList.add('js-confirm-msg');
  }

  function removeTransactionMessage() {
    transactionMessage.innerHTML = "";
    transactionMessage.classList.remove('js-confirm-msg');
  }

  // removeErrorClass();
}

function removeErrorClass() {
  var inputs = document.querySelectorAll('input');
  var selects = document.querySelectorAll('select');

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i] != '') {
      this.classList.remove('js-error');
      // console.log(this);
    }
  }

  for (var j = 0; j < selects.length; j++) {
    if (selects[j] != '') {
      this.classList.remove('js-error');
      // console.log(this);
    }
  }
}


// Activate Transactions View
function activateTransactions() {
  // Remove classes from other nav items
  dashboardBtn.classList.remove('active');
  profileBtn.classList.remove('active');
  // Add class to clicked element
  transactionsBtn.classList.add('active');

  // Toggle Content
  dashboardBody.style.display = "none";
  transactionsContent.style.display = "block";
  // transactionsContent.innerHTML = ;
  transactionsContent.innerHTML = transactionsInnerContent;
}

function validateNewTransaction() {
  var selects = document.querySelectorAll('#newTransactionForm select');
  var inputs = document.querySelectorAll('#newTransactionForm input[required]');

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', removeErrorClass);
    if (inputs[i].value == '') {
      inputs[i].classList.add('js-error');
    } else {
      inputs[i].classList.remove('js-error');
    }
  }

  for (var j = 0; j < selects.length; j++) {
    selects[j].addEventListener('input', removeErrorClass);
    if (selects[j].value == 'default') {
      selects[j].classList.add('js-error');
    } else {
      selects[j].classList.remove('js-error');
    }
  }

  for (var k = 0; k < inputs.length; k++) {
    if (inputs[k].className === 'js-error') {
      console.log('validation fialed');
      return false;
    }
  }

  for (var l = 0; l < selects.length; l++) {
    if (selects[l].className === 'js-error') {
      console.log('validation fialed');
      return false;
    }
  }

  console.log('validated');
  return true;
}
