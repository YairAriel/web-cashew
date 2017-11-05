<template>
  <div class="transaction-table">
    <div class="sticky-header">
      <table class="is-sticky">
        <tr>
          <th class="sticky" id="sticky-1"></th>
          <th class="sticky" id="sticky-2"></th>
          <th class="sticky is-size-7" id="sticky-3">Category</th>
          <th class="sticky" id="sticky-4"></th>
          <th class="sticky is-size-7" id="sticky-5">Date</th>
          <th class="sticky" id="sticky-6"></th>
          <th class="sticky is-size-7" id="sticky-7">Amount</th>
          <th class="sticky" id="sticky-8"></th>
          <th class="sticky" id="sticky-9"></th>
        </tr>
      </table>
    </div>
    <div id="is-not-sticky" @wheel="wheelScroll">
      <table class="transactions">
        <thead>
          <tr>
            <th id="th-1" class="is-transaction-icon not-sticky"></th>
            <th id="th-2"></th>
            <th id="th-3" class="is-size-7 not-sticky">Category</th>
            <th id="th-4"></th>
            <th id="th-5" class="is-size-7 not-sticky">Date</th>
            <th id="th-6"></th>
            <th id="th-7" class="is-size-7 not-sticky">Amount</th>
            <th id="th-8"></th>
            <th id="th-9" class="is-transaction-icon not-sticky"></th>
          </tr>
        </thead>
        <tbody class="is-trans-body">
          <tr class="is-spacer"></tr>
          <template v-for="(type, index) in transactionArray">
            <transaction v-if="index !== 0 && index !== transactionArray.length - 1" :some-style="someClass"  :transaction-type="type" :key="index"></transaction>
            <transaction v-else-if="index === 0" :some-style="firstClass"  :transaction-type="type" :key="index"></transaction>
            <transaction v-else :some-style="lastClass"  :transaction-type="type" :key="index"></transaction>
            <tr class="is-spacer" :key="index"></tr>
          </template>
        </tbody>
      </table>
    </div>
    <action-buttons></action-buttons>
  </div>
</template>

<script>
  import { Income, Expense } from '@/assets/javascript/transaction'
  import Transaction from '@/components/Transaction.vue'
  import ActionButtons from '@/components/Action-buttons.vue'
  const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  const saftySpase = 30
  const headerCells = 9
  const transactionArray = []
  for (let i = 0; i < 50; i += 2) {
    transactionArray[i] = new Income(i, i * 1000, new Date(), dummyText, 'cash', 'salary')
    transactionArray[i + 1] = new Expense(i + 1, (i + 1) * 1000, new Date(), dummyText, 'cash', 'rent')
  }
  let touchDownY
  let touchUpY
  const scrollAnim = {
    up: 'up',
    down: 'down',
    upFirst: 'up-first',
    downLast: 'down-last',
    animTimeMs: 500,
    typeTouch: 'touch',
    typeWheel: 'wheel'
  }

  export default {
    name: 'transaction-table',
    components: {
      Transaction,
      ActionButtons
    },
    data () {
      return {
        transactionArray,
        scrollArray: null,
        scroll: 0,
        tranCont: null,
        transactions: null,
        rows: null,
        style: null,
        someClass: '',
        firstClass: '',
        lastClass: ''
      }
    },
    methods: {
      wheelScroll (e) {
        const delta = {type: scrollAnim.typeWheel, y: e.deltaY}
        this.scrollEndAnim(delta)
      },
      touchStart (e) {
        touchDownY = e.touches[0].clientY
      },
      touchEnd (e) {
        touchUpY = e.changedTouches[0].clientY
        const delta = {type: scrollAnim.typeTouch, y: touchDownY - touchUpY}
        this.scrollEndAnim(delta)
      },
      setAnim (firstClass, someClass, lastClass) {
        this.firstClass = firstClass
        this.someClass = someClass
        this.lastClass = lastClass
      },
      scrollEndAnim (delta) {
        const transBody = document.querySelector('.is-trans-body')
        if (this.rows.scrollTop === 0 && delta.y < 0) {
          switch (delta.type) {
            case scrollAnim.typeTouch:
              this.setAnim(scrollAnim.down, scrollAnim.down, scrollAnim.down)
              break
            case scrollAnim.typeWheel:
              this.setAnim(scrollAnim.upFirst, scrollAnim.up, scrollAnim.up)
              break
          }
        } else if (this.rows.scrollTop + this.rows.offsetHeight >= transBody.offsetHeight && delta.y > 0) {
          switch (delta.type) {
            case scrollAnim.typeTouch:
              this.setAnim(scrollAnim.up, scrollAnim.up, scrollAnim.up)
              break
            case scrollAnim.typeWheel:
              this.setAnim(scrollAnim.down, scrollAnim.down, scrollAnim.downLast)
              break
          }
        } else {
          return
        }
        setTimeout(this.setAnim, scrollAnim.animTimeMs, '', '', '')
      },
      steakyHeader () {
        const stickyHeader = document.querySelector('.is-sticky')
        const stickyPosY = stickyHeader.getBoundingClientRect().top
        const tranContParentHeight = this.tranCont.parentElement.offsetHeight
        const innerHight = window.innerHeight - stickyPosY - saftySpase
        const height = tranContParentHeight < innerHight ? tranContParentHeight + 'px' : innerHight + 'px'
        this.tranCont.style.maxHeight = this.rows.style.maxHeight = height
        this.rows.style.maxHeight = this.tranCont.innerHeight + 'px'
        stickyHeader.style.left = this.transactions.offsetLeft + 'px'
        for (let i = 1; i <= headerCells; i++) {
          let sticky = document.querySelector('#sticky-' + i)
          sticky.style.minWidth = sticky.style.maxWidth = sticky.style.width = document.querySelector('#th-' + i).offsetWidth + 'px'
        }
      }
    },
    mounted () {
      this.tranCont = document.querySelector('.transaction-table')
      this.transactions = document.querySelector('.transactions')
      this.rows = document.querySelector('#is-not-sticky')
      this.scrollArray = transactionArray.slice(0, Math.floor(this.tranCont.offsetHeight / 64) + 2)
      this.steakyHeader()
      window.addEventListener('resize', this.steakyHeader)
      this.tranCont.addEventListener('touchstart', this.touchStart)
      this.tranCont.addEventListener('touchend', this.touchEnd)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.steakyHeader)
      this.tranCont.removeEventListener('touchstart', this.touchStart)
      this.tranCont.removeEventListener('touchend', this.touchEnd)
    }
  }
</script>
<style scoped>
  .transaction-table {
    position: relative;
    overflow: hidden;
    min-height: 100%;
  }
  #is-not-sticky {
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    min-width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    z-index: 100;
  }
  .transactions{
    max-width: calc(100% - 6rem);
    min-width: calc(100% - 6rem);
    margin: 0 auto 4rem;
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
    height: 1rem;
  }

  .not-sticky, .sticky{
    color: white;
  }

  .sticky{
    display: inline-block;
    line-height: 2rem;
  }
  .is-sticky{
    display: block;
    margin: 0;
    position: relative;
  }
  .sticky-header{
    margin: 0;
    position: relative;
    display: block;
    top: 0;
    min-width:100%;
    width: 100%;
    background-color: #4C4C4C;
  }
</style>


