<template>
  <div class="test">
    <a class="button is-success is-outlined modal-button">New Income</a>
    <a v-on:click="expenseModal" class="button is-danger is-outlined">New Expense</a>

    <div id="modal-ter" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '@/i18n'
//  const $t = i18n.t.bind(i18n)

export default {
  name: 'test',
  i18n,
  data () {
    return {
      msg: 'test',
      methods: {
        expenseModal (event) {
          alert('New Expense was clicked')
        }
      }
    }
  }
}
</script>

