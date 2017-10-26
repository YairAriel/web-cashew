<template>
  <div class="newExpense">
    <div class="columns is-mobile">
      <div class="column is-1"></div>
      <div class="column is-10">
        <h1 class="title is-2 is-spaced has-text-danger has-text-centered">NEW EXPENSE</h1>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input is-large" type="number" placeholder="Amount">
            <span class="icon is-small is-left">
              <i class="fa fa-usd"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <span class="select is-large is-fullwidth">
              <select v-model="selected">
                <option v-for="(option, index) in options" v-bind:key="index">
                  {{ option.text }}
                </option>
              </select>
            </span>
            <span class="icon is-small is-left">
              <i class="fa fa-th-list"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <date-picker @date-picked="datePicked" :is-dir-rtl="isDirRtl" input-class="input is-large" ></date-picker>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input is-large" type="text" placeholder="Comments">
                <span class="icon is-small is-left">
                  <i class="fa fa-pencil"></i>
              </span>
          </p>
        </div>

        <div class="buttons">
          <a class="button is-primary is-large">
            <span class="icon is-small">
                  <i class="fa fa-check"></i>
                </span>
            <span>ADD</span>
          </a>
          <a class="button is-light is-large">
            <span class="icon is-small">
                  <i class="fa fa-times"></i>
                </span>
            <span>CANCEL</span>
          </a>
        </div>

      </div>
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
    name: 'newExpense',
    i18n,
    data () {
      return {
        msg: $t('hello'),
        selected: 'Category',
        options: [{
          text: 'Category',
          value: null
        },
        {
          text: 'Municipal Rate',
          value: 'Municipal Rate'
        },
        {
          text: 'Entertainment',
          value: 'Entertainment'
        },
        {
          text: 'Insurance',
          value: 'Insurance'
        },
        {
          text: 'Helth',
          value: 'Helth'
        }
        ]
      }
    },
    components: {
      DatePicker
    }
  }
</script>

<style scoped>
  h1 {
    margin-top: 4%
  }
  .button {
    margin-top: 10%;
  }
  .control {
    font-size: 0.2em
  }
</style>