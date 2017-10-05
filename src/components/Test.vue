<template>
    <div class="test">
        <h1 class="title is-1">{{ msg }}</h1>
        <h6>{{ msg }}</h6>
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
      msg: 'test'
    }
  }
}
</script>

