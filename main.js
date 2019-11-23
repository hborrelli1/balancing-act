var closeBtn = document.querySelector('#close');
var dashboardBtn = document.querySelector('#dashboard-btn');
var transactionsBtn = document.querySelector('#transactions-btn');
var profileBtn = document.querySelector('#profile-btn');
var dashboardContent = document.querySelector('#dashboard-content');
var transactionsContent = document.querySelector('#transactions-content');

/*
 * Close Intro Box Even Listener and Function
 */

dashboardBtn.addEventListener('click', activateDashboard);
transactionsBtn.addEventListener('click', activateTransactions);
closeBtn.addEventListener("click", closeIntro);

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
 * Swap class when clicking on different nav items
 */

// add active to transactions nav item
function activateTransactions() {
  // Remove classes from other nav items
  dashboardBtn.classList.remove('active');
  profileBtn.classList.remove('active');
  // Add class to clicked element
  transactionsBtn.classList.add('active');

  dashboardContent.innerHTML = "";
  transactionsContent.innerHTML = `<header>
    <h1>Transactions</h1>
    <section class="button-block">
      <button class="button">All</button>
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

// Add active class to Dashboard nav item
function activateDashboard() {
  profileBtn.classList.remove('active');
  transactionsBtn.classList.remove('active');
  dashboardBtn.classList.add('active');
  transactionsContent.innerHTML = "";
  dashboardContent.innerHTML = `<header>
    <h1>Balancing Act</h1>
  </header>

  <div class="column1">

    <section id="intro-box" class="card intro-card">
      <p>Welcome, Oscar!</p>
      <button id="close" type="button"><img src="assets/close.svg" alt="Close"></button>
    </section>

    <div class="quick-cards-wrap">
      <section class="card quick-stats-card">
        <h5 class="title">Income</h5>
        <p class="output">$2,119.12</p>
      </section>

      <section class="card quick-stats-card">
        <h5 class="title">Expenses</h5>
        <p class="output">$420.54</p>
      </section>

      <section class="card quick-stats-card">
        <h5 class="title">Credit Score</h5>
        <p class="output">673</p>
      </section>
    </div>

    <section class="accounts-card">
      <header>
        <h2>Accounts</h2>
        <button class="button">Manage Accounts</button>
      </header>
      <ul class="accounts-list">
        <li class="card">
          <div class="icon">
            <img src="assets/checking.svg" alt="Checking Account">
          </div>
          <p class="account">Wells Fargo</p>
          <p class="type">Checking</p>
        </li>
        <li class="card">
          <div class="icon">
            <img src="assets/savings.svg" alt="Savings Account">
          </div>
          <p class="account">Wells Fargo</p>
          <p class="type">Savings</p>
        </li>
        <li class="card">
          <div class="icon">
            <img src="assets/credit-card.svg" alt="Credit Card">
          </div>
          <p class="account">Amazon Credit</p>
          <p class="type">Credit Card</p>
        </li>
        <li class="card">
          <div class="icon">
            <img src="assets/credit-card.svg" alt="Credit Card">
          </div>
          <p class="account">Southwest Credit</p>
          <p class="type">Credit Card</p>
        </li>
      </ul>
    </section>
  </div>

  <section class="column2">
    <section class="card recent-transactions-card">
      <header>
        <h2>Recent Transactions</h2>
        <button class="button">New Transactions</button>
      </header>
      <table class="recent-transactions">
        <thead>
          <tr>
            <th>Date</th>
            <th>Payee</th>
            <th>Inflow</th>
            <th>Outflow</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Oct 25, 2019</td>
            <td>Target</td>
            <td>-</td>
            <td>$82.35</td>
          </tr>
          <tr>
            <td>Oct 24, 2019</td>
            <td>Express</td>
            <td>-</td>
            <td>$212.14</td>
          </tr>
          <tr>
            <td>Oct 22, 2019</td>
            <td>Paycheck</td>
            <td>$1319.12</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Oct 21, 2019</td>
            <td>Trader Joes</td>
            <td>-</td>
            <td>$54.92</td>
          </tr>
          <tr>
            <td>Oct 20, 2019</td>
            <td>Shell</td>
            <td>-</td>
            <td>$46.23</td>
          </tr>
          <tr>
            <td>Oct 19, 2019</td>
            <td>Rent</td>
            <td>$800.00</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Oct 19, 2019</td>
            <td>Hapa Sushi</td>
            <td>-</td>
            <td>$13.97</td>
          </tr>
          <tr>
            <td>Oct 18, 2019</td>
            <td>Pig Train</td>
            <td>-</td>
            <td>$4.83</td>
          </tr>
          <tr>
            <td>Oct 18, 2019</td>
            <td>RTD</td>
            <td>-</td>
            <td>$6.00</td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>`;
}
