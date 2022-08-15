<template>
  <div>
    <MilkDownEditor :markdown-text="text" :readonly="readonly"/>
  </div>
</template>

<script>

import MilkDownEditor from '@/components/editor/MilkDownEditor'

export default {
  name: 'App',
  components: {
    MilkDownEditor
  },
  data() {
    return {
      text: '123',
      readonly: false
    }
  }
}
</script>

<style>

</style>
