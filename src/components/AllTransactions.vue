<template>
  <div class="all-transactions">
    <h1 class="title is-3 is-spaced has-text-centered" id="header">
      TRANSACTIONS
    </h1>
    <div id="stripe" class="btn-group" role="group">
      <button class="btn" type="button" @click="activeBtn = 'btnIncomes'" :class="{selected: activeBtn === 'btnIncomes' }">Incomes</button>
      <button class="btn btnMiddle" type="button" @click="activeBtn = 'btnAll'" :class="{selected: activeBtn === 'btnAll' }">All</button>
      <button class="btn" type="button" @click="activeBtn = 'btnExpenses'" :class="{selected: activeBtn === 'btnExpenses' }">Expenses</button>
    </div>
    <div class="columns is-mobile">
        <div class="column is-1"></div>
        <div class="column is-10">

        </div>
        <div class="column is-1"></div>
    </div>
  </div>
</template>
<script>
  import DatePicker from '@/components/Date-picker.vue'
  import i18n from '@/i18n'
  const $t = i18n.t.bind(i18n)
  export default {
    name: 'Transactions',
    i18n,
    data () {
      return {
        msg: $t('hello'),
        activeBtn: 'btnAll'
      }
    },
    components: {
      DatePicker
    },
    methods: {
      selectButton: function () {
        this.isSelected = !this.isSelected
      }
    }
  }
</script>

<style scoped>
  .all-transactions {
    background-color: grey;
    margin: 0;
  }
  h1 {
    color: white;
    background: hsl(171, 100%, 41%);
    padding: 20px 0;
  }
  #header {
    margin-bottom: 0px;
  }
  #stripe {
    background-color: white;
    text-align: center;
    height: 30px;
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
</style>

