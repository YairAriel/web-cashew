<template>
  <div class="newIncome">
    <div class="columns is-mobile">
      <div class="column is-1"></div>
      <div class="column is-10">
        <h1 class="title is-2 is-spaced has-text-primary has-text-centered">NEW INCOME</h1>
        <div class="field">
          <p class="control">
            <input class="input is-large" type="number" placeholder="Amount">
          </p>
        </div>
        <div class="field">
          <p class="control">
            <div class="select is-large">
              <select>
                <option value="" disabled selected hidden>Source</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <input class="input is-large" type="text" placeholder="Date">
          </p>
        </div>
        <div class="field">
          <div class="control">
            <textarea class="textarea is-large" placeholder="Comments"></textarea>
          </div>
        </div>

        <a class="button is-success is-large">
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
    <div class="column is-1"></div>
  </div>

  </div>
</template>


<script>
import i18n from '@/i18n'
const $t = i18n.t.bind(i18n)

export default {
  name: 'newIncome',
  i18n,
  data () {
    return {
      msg: $t('hello')
    }
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

