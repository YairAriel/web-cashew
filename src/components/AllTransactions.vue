<template>
  <div class="all-transactions">
    <h1 class="title is-3 is-spaced has-text-centered" id="header">
      TRANSACTIONS
    </h1>
    <div id="strip" class="btn-group" role="group">
      <button class="btn" type="button" @click="activeBtn = 'btnIncomes'" :class="{selected: activeBtn === 'btnIncomes' }">Incomes</button>
      <button class="btn btnMiddle" type="button" @click="activeBtn = 'btnAll'" :class="{selected: activeBtn === 'btnAll' }">All</button>
      <button class="btn" type="button" @click="activeBtn = 'btnExpenses'" :class="{selected: activeBtn === 'btnExpenses' }">Expenses</button>
    </div>
    <div id="dateStrip">
      <select v-model="dateSelected" @change="show">
        <option>Today</option>
        <option>This Month</option>
        <option>This Year</option>
        <hr>
        <option>Dates...</option>
        <modal name="dates-modal">
          Test!
        </modal>
      </select>
    </div>
    <transaction-table></transaction-table>
    </div>
  </div>
</template>
<script>
  import DatePicker from '@/components/Date-picker.vue'
  import TransactionTable from '@/components/Transaction-table'
  import i18n from '@/i18n'
  const $t = i18n.t.bind(i18n)
  export default {
    name: 'AllTransactions',
    i18n,
    data () {
      return {
        msg: $t('hello'),
        activeBtn: 'btnAll',
        dateSelected: 'Today'
      }
    },
    components: {
      DatePicker,
      TransactionTable
    },
    methods: {
      selectButton: function () {
        this.isSelected = !this.isSelected
      },
      show: function () {
        if (this.dateSelected === 'Dates...') {
          this.$modal.show('dates-modal')
        }
      },
      hide: function () {
        this.$modal.hide('dates-modal')
      }
    }
  }
</script>

<style scoped>
  .all-transactions {
    margin: 0;
  }
  h1 {
    color: white;
    background: hsl(171, 100%, 41%);
    padding: 20px 0;
    letter-spacing: 3.5px;
  }
  #header {
    margin-bottom: 0px;
  }
  #strip {
    background-color: white;
    text-align: center;
    height: 30px;
  }
  #dateStrip {
    background-color: hsl(171, 100%, 41%);
    height: 30px;
    text-align: center;
  }
 .btn {
    border: none;
    background: none;
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    color: hsl(171, 100%, 41%);
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    outline: none;
    letter-spacing: 2px;
  }
  .btnMiddle {
    margin: 0 25px;
  }
  button:hover {
    background-color: hsl(171, 100%, 41%);
    color: white
  }
  .selected {
    background-color: hsl(171, 100%, 41%);
    color: white
  }
  select {
    border: none;
    background: none;
    color: white;
    font-weight: 700;
    text-transform: uppercase; 
    letter-spacing: 2px;
  }
  option {
    color: #92969b;
  }
  select:focus {
    outline: none
  }
  hr {
    border: 1px solid #92969b;
  }
  .trans-wraper{
    max-height: max-content;
  }
</style>

