class Transaction {
  constructor (id, amount, date, description, method, category, startDate, endDate) {
    this.id = id
    this.amount = amount
    this.date = date
    this.description = description
    this.method = method
    this.category = category
    this.startDate = startDate
    this.endDate = endDate
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
