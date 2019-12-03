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
  <form class="" action="" method="">
    <label for="type-of">Type of Transaction:</label>
    <select name="type-of">
      <option value="default">- Select One -</option>
      <option value="inflow">Inflow</option>
      <option value="outflow">Outflow</option>
    </select>
    <label for="category">Category:</label>
    <select name="category">
      <option value="default">- Select One -</option>
      <option value="groceries">Groceries</option>
      <option value="bills">Bills</option>
      <option value="fun-money">Fun Money</option>
      <option value="paycheck">Paycheck</option>
    </select>
    <label for="account-from">Account From:</label>
    <select name="account-from">
      <option value="default">- Select One -</option>
      <option value="other-option">Checking</option>
      <option value="other-option">Savings</option>
      <option value="other-option">Amazon Credit</option>
      <option value="other-option">Southwest Credit</option>
    </select>
    <label for="payee">Payee:</label>
    <input type="text" name="payee" value="">
    <label for="amount">Amount:</label>
    <input type="text" name="amount" value="">
    <label for="memo">Memo (optional):</label>
    <input type="text" name="memo" value="">
    <input id="new-transaction-btn" type="submit" name='submit' value="Log Expense">
  </form>
  <p id="message"></p>
</section>`;

/*
 * Close Intro Box Function
 */
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


/*
 * Activate Dashboard View
 */
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


/*
 * Transactions Events
 */
function newTransaction(event) {

  // Post New Transaction
  if (event.target.id === "new-transaction-btn") {
    var closeBtn = document.querySelector('#close-banner');
    // Confirmation Message
    var confirmMessage = `<span>You expense of $87 has been logged.</span><img id="close-banner" src="assets/close.svg" alt="Close">`;

    // Add class for styling transition
    var transactionMessage = document.getElementById("message");
    transactionMessage.innerHTML = confirmMessage;
    transactionMessage.classList.add('js-confirm-msg');

    if (event.target.id === "close-banner") {
      // Close banner
      transactionMessage.innerHTML = "";
    }

  }
}



/*
 * Activate Transactions View
 */
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

// Event Listeners
dashboardBtn.addEventListener('click', activateDashboard);
transactionsBtn.addEventListener('click', activateTransactions);
closeBtn.addEventListener("click", closeIntro);
transactionsContent.addEventListener("click", newTransaction);
