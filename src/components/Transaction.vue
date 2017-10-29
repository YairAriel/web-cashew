<template>
  <tr :class="'transaction box is-table-row is-' + type">
    <!-- <div class="has-no-vpadding columns is-narrow is-mobile is-marginless has-elements-centered"> -->
    <!-- <tr class=""> -->
    <td class="has-less-hpadding">
      <span class="icon is-medium">
              <i :class="'fa fa-2x ' + icons[transactionType.category]"></i>
            </span>
    </td>
    <td class="is-divider-vertical has-no-hpadding"></td>
    <td class="has-less-hpadding">
      <p class="is-size-7-mobile is-capitalized">{{ transactionType.category }}</p>
    </td>
    <td class="is-divider-vertical has-no-hpadding"></td>
    <td class="has-less-hpadding">
      <p class="is-size-7-mobile">{{ formatDate }}</p>
    </td>
    <td class="is-divider-vertical has-no-hpadding"></td>
    <td class="has-less-hpadding">
      <p :class="'is-size-7-mobile is-' + type + '-amount'">{{ formatAmount }}</p>
    </td>
    <!-- </tr> -->
    <!-- </div> -->
  </tr>
</template>

<script>
  import icons from '@/assets/icons/icons'
  import i18n from '@/i18n'
  const $t = i18n.t.bind(i18n)
  export default {
    name: 'transaction',
    props: {
      transactionType: {
        type: Object
      }
    },
    data () {
      return {
        type: this.transactionType.constructor.name.toLowerCase(),
        icons
      }
    },
    computed: {
      formatAmount () {
        return this.transactionType.amount.toLocaleString()
      },
      formatDate () {
        return this.transactionType.date.toLocaleString($t('lang'), {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        })
      }
    }
  }
</script>

<style scoped>
  .is-income {
    background-color: rgba(35, 210, 96, 0.2);
  }
  .is-expense {
    background-color: rgba(255, 56, 96, 0.2)
  }
  .is-income-amount {
    color: rgb(35, 210, 96) !important;
  }
  .is-expense-amount {
    color: rgb(255, 56, 96)
  }
  .is-table-row {
    display: table-row !important;
  }
  .is-marginless {
    margin: 0;
  }
  .is-vcentered {
    align-items: center;
  }
  .has-elements-centered {
    justify-content: center;
  }
  .has-less-hpadding {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .has-no-hpadding {
    padding-left: 0;
    padding-right: 0;
  }
  td {
    text-align: center;
    vertical-align: middle;
  }
  .is-catagory {
    width: 0.1%;
    white-space: nowrap;
  }
  .is-margin-centered {
    margin: 0 auto;
  }
  .is-transaction-icon {
    box-shadow: unset;
    border: solid 0.1rem rgb(35, 210, 96);
  }
</style>


