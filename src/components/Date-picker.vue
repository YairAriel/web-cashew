<template>
  <div id='calendar'>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input @focus="setCalendarVisible" :class="inputClass" :date="pickDate" v-model="pickDateToString" readonly="true" type="text">
        <span :class="isDirRtl ? 'is-right icon is-small': 'is-left icon is-small'">
                              <i class="fa fa-calendar"></i>
                            </span>
      </p>
    </div>
    <div :class="isCalendarVisible ? 'modal is-active' : 'modal'">
      <div class="modal-background" @click="setCalendarHidden"></div>
      <div class="modal-content">
        <div class="calendar">
          <div class="calendar-nav">
            <div class="calendar-nav-left">
              <button class="button is-primary" @click="goBackMonth">
                                    <i :class="isDirRtl ? 'fa fa-chevron-right': 'fa fa-chevron-left'"></i>
                                  </button>
            </div>
            <div>{{ monthYear }}</div>
            <div class="calendar-nav-right">
              <button class="button is-primary" @click="goNextMonth">
                                    <i :class="isDirRtl ? 'fa fa-chevron-left': 'fa fa-chevron-right'"></i>
                                  </button>
            </div>
          </div>
          <div class="calendar-container">
            <div class="calendar-header">
              <div v-for="(day, index) in $t('weekDays')" :key="index" class="calendar-date">{{ day }}</div>
            </div>
            <div class="calendar-body">
              <div v-for='(calendarDate, index) in calendarDates' :key='index' :class="calendarDate.disabled ? 'calendar-date is-disabled': 'calendar-date'">
                <button @click="userPickedDate(calendarDate.dateNum)" :class="calendarDate.isToday? 'date-item is-today': 'date-item'">{{ calendarDate.dateNum }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import i18n from '@/i18n'
  const $t = i18n.t.bind(i18n)
  const calendarDatesLength = 42
  const firstWeekLengthInCalendar = 7
  const maxDateLastMonthInCalendar = 23
  const maxDateNextMonthInCalendar = 15
  const minIndexThisMonthEnd = 28
  export default {
    name: 'calendar',
    i18n,
    props: {
      isDirRtl: {
        type: Boolean,
        default: document.dir === 'rtl'
      },
      inputClass: {
        type: String
      }
    },
    data () {
      return {
        curDate: new Date(),
        monthFirst: null,
        monthLast: null,
        lastMonthLast: null,
        browseDate: new Date(),
        calendarDates: null,
        isCalendarVisible: false,
        monthYear: null,
        pickDate: new Date()
      }
    },
    methods: {
      setCalendarVisible () {
        this.isCalendarVisible = true
      },
      setCalendarHidden () {
        this.isCalendarVisible = false
        this.browseDate.setFullYear(this.pickDate.getFullYear())
        this.browseDate.setMonth(this.pickDate.getMonth())
        this.updateCalendar()
      },
      calcCalendarDates () {
        let calendarDates = []
        for (let i = 0; i < calendarDatesLength; i++) {
          let index = (i + this.monthFirst.getDay()) % calendarDatesLength
          let dateNum
          if (index < this.monthFirst.getDay()) {
            dateNum = this.lastMonthLast.getDate() - this.monthFirst.getDay() + index + 1
          } else {
            dateNum = i % this.monthLast.getDate() + 1
          }
          let disabled = (index < firstWeekLengthInCalendar && dateNum > maxDateLastMonthInCalendar) || (index > minIndexThisMonthEnd && dateNum < maxDateNextMonthInCalendar)
          let isToday = this.checkToday(dateNum)
          calendarDates[index] = {
            dateNum,
            disabled,
            isToday
          }
        }
        this.calendarDates = calendarDates
      },
      goBackMonth () {
        this.browseDate.setMonth(this.browseDate.getMonth() - 1)
        this.updateCalendar()
      },
      goNextMonth () {
        this.browseDate.setMonth(this.browseDate.getMonth() + 1)
        this.updateCalendar()
      },
      setMonthYear () {
        this.monthYear = this.browseDate.toLocaleDateString($t('lang'), {
          month: 'short',
          year: 'numeric'
        })
      },
      setCalendarDateHelpers () {
        this.monthFirst = new Date(this.browseDate.getFullYear(), this.browseDate.getMonth(), 1)
        this.monthLast = new Date(this.browseDate.getFullYear(), this.browseDate.getMonth() + 1, 0)
        this.lastMonthLast = new Date(this.browseDate.getFullYear(), this.browseDate.getMonth(), 0)
      },
      updateCalendar () {
        this.setCalendarDateHelpers()
        this.setMonthYear()
        this.calcCalendarDates()
      },
      checkToday (dateNum) {
        if (this.browseDate.getFullYear() === this.curDate.getFullYear()) {
          if (this.browseDate.getMonth() === this.curDate.getMonth()) {
            return this.curDate.getDate() === dateNum
          }
        }
        return false
      },
      userPickedDate (dateNum) {
        this.pickDate = new Date(this.browseDate.getFullYear(), this.browseDate.getMonth(), dateNum)
        this.setCalendarHidden()
        this.$emit('date-picked', this.pickDate)
      }
    },
    computed: {
      pickDateToString () {
        return this.pickDate.toLocaleDateString($t('lang'), {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        })
      }
    },
    created () {
      this.updateCalendar()
    }
  }
</script>

<style scoped>
  .calendar-container {
    background-color: white;
  }
  .calendar {
    min-width: 0%;
    max-width: 17rem;
    margin: auto;
  }
  .calendar-body {
    background-color: white;
  }
  .date-item {
    height: 2rem !important;
    width: 2rem !important;
    line-height: unset !important;
  }
</style>
