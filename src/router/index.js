import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Calendar from '@/components/Calendar'
import Test from '@/components/Test'
import NewIncome from '@/components/NewIncome'
import NewExpense from '@/components/NewExpense'

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
    }
  ]
})
