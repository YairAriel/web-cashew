import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Calendar from '@/components/Calendar'
import Test from '@/components/Test'
import NewIncome from '@/components/NewIncome'
import NewExpense from '@/components/NewExpense'
import Transaction from '@/components/Transaction'
import TransactionTable from '@/components/TransactionTable'
import AllTransactions from '@/components/AllTransactions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/newincome',
      name: 'NewIncome',
      component: NewIncome
    },
    {
      path: '/newexpense',
      name: 'NewExpense',
      component: NewExpense
    },
    {
      path: '/transaction',
      name: 'Transaction',
      component: Transaction
    },
    {
      path: '/transaction-table',
      name: 'Transactions',
      component: TransactionTable
    },
    {
      path: '/all-transactions',
      name: 'AllTransactions',
      component: AllTransactions
    }
  ]
})
