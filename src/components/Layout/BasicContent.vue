<template>
  <div class="content">
    <MilkDownEditor />
  </div>
</template>

<script>
import MilkDownEditor from '@/components/Editor/MilkDownEditor'

export default {
  name: 'BasicContent',
  components: { MilkDownEditor }
}
</script>

<style scoped>
.content {
  padding: 40px;
}
</style>