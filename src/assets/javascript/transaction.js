class Transaction {
  constructor (id, amount, date, description, method, category) {
    this.id = id
    this.amount = amount
    this.date = date
    this.description = description
    this.method = method
    this.category = category
  }
}

class Expense extends Transaction {

}

class Income extends Transaction {

}

export {
  Expense,
  Income
}
