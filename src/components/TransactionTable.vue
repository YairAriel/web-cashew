<template>
  <table>
    <tr>
      <th class="is-transaction-icon"></th>
      <th></th>
      <th class="is-size-7">Category</th>
      <th></th>
      <th class="is-size-7">Date</th>
      <th></th>
      <th class="is-size-7">Amount</th>
    </tr>
    <tr class="is-spacer"></tr>
    <template v-for="(type, index) in transactionArray">
      <transaction  :transaction-type="type" :key="index"></transaction>
      <tr class="is-spacer" :key="index"></tr>
    </template>
  </table>
</template>

<script>
  import { Income, Expense } from '@/assets/javascript/transaction'
  import Transaction from '@/components/Transaction.vue'
  const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  const income = new Income(1, 500000, new Date(2017, 10, 25), dummyText, 0, 'salary')
  const expense = new Expense(2, 23456789, new Date(2017, 11, 10), dummyText, 0, 'rent')
  export default {
    name: 'transaction-table',
    components: {
      Transaction
    },
    data () {
      return {
        transactionArray: [income, expense]
      }
    }
  }
</script>

<style scoped>
  table {
    min-width: calc(100% - 6rem);
    max-width: calc(100% - 6rem);
    margin: 2rem auto;
  }
  th {
    text-align: center;
  }
  .is-transaction-icon {
    width: 0.1%;
    white-space: nowrap;
  }
  .is-spacer{
    min-height: 1rem;
    height:1rem;
  }
</style>


