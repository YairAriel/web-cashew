<template>
  <div class="newIncome">
    <div class="columns is-mobile">
      <div class="column is-1"></div>
      <div class="column is-10">
        <h1 class="title is-2 is-spaced has-text-success has-text-centered">NEW INCOME</h1>
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
              <select v-model="selectedSource">
                <option v-for="(option, index) in sources" v-bind:key="index">
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
    name: 'newIncome',
    i18n,
    data () {
      return {
        msg: $t('hello'),
        selectedSource: 'Source',
        sources: [{
          text: 'Source',
          value: null
        },
        {
          text: 'Source 1',
          value: 'Source 1'
        },
        {
          text: 'Source 2',
          value: 'Source 2'
        },
        {
          text: 'Source 3',
          value: 'Source 3'
        },
        {
          text: 'Source 4',
          value: 'Source 4'
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
</style>

