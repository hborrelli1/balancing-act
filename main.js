// Global Variables
var closeBtn = document.querySelector('#close');
var dashboardBtn = document.querySelector('#dashboard-btn');
var transactionsBtn = document.querySelector('#transactions-btn');
var profileBtn = document.querySelector('#profile-btn');
var dashboardContent = document.querySelector('#dashboard-content');
var transactionsContent = document.querySelector('#transactions-content');

// Event Listeners
dashboardBtn.addEventListener('click', activateDashboard);
transactionsBtn.addEventListener('click', activateTransactions);
closeBtn.addEventListener("click", closeIntro);

/*
 * Close Intro Box Even Listener and Function
 */
function closeIntro() {
  // Add class to #intro-box that changes margin-top
  var introBox = document.getElementById("intro-box");
  introBox.classList.add('hidden');

  // Remove #introBox once CSS transition is complete
  function hideBox() {
    // Remove element
    introBox.remove();
  }

  setTimeout(hideBox, 500);
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
  dashboardContent.style.display = "none";
  transactionsContent.style.display = "block";
  transactionsContent.innerHTML = `<header>
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
    <form class="" action="#" method="post">
      <label for="type-of">Type of Transaction:</label>
      <select name="type-of">
        <option value="expense">Expense</option>
        <option value="other-option">Other Option</option>
      </select>
      <label for="category">Category:</label>
      <select name="category">
        <option value="default">- Select One -</option>
        <option value="other-option">Other Option</option>
      </select>
      <label for="account-from">Account From:</label>
      <select name="account-from">
        <option value="default">- Select One -</option>
        <option value="other-option">Other Option</option>
      </select>
      <label for="payee">Payee:</label>
      <input type="text" name="payee" value="">
      <label for="outflow">Outflow:</label>
      <input type="text" name="outflow" value="">
      <label for="category-custom">Category:</label>
      <input type="text" name="category-custom" value="">
      <input type="submit" name='submit' value="Log Expense">
    </form>
  </section>`;
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
  dashboardContent.style.display = "block";
}
