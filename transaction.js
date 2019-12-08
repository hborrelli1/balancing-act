class Transaction {
  constructor(type, category, accountFrom, payee, amount, memo) {
    this.type = type;
    this.category = category;
    this.accountFrom = accountFrom;
    this.payee = payee;
    this.amount = amount;
    this.memo = memo;
  }
}
