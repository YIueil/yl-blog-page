<template>
  <div>
    <MilkDownEditor :markdown-text="text" :readonly="true"/>
  </div>
</template>

<script>

import MilkDownEditor from '@/components/MilkDownEditor'

export default {
  name: 'App',
  components: {
    MilkDownEditor
  },
  data() {
    return {
      text: '123'
    }
  }
}
</script>

<style>

</style>
