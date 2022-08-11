<template>
  <VueEditor :editor="editor" />
</template>

<script>
import { Editor, rootCtx, defaultValueCtx } from '@milkdown/core'
import { nord } from '@milkdown/theme-nord'
import { VueEditor, useEditor } from '@milkdown/vue'
import { commonmark } from '@milkdown/preset-commonmark'

export default {
  name: 'MilkDownEditor',
  components: {
    VueEditor
  },
  setup () {
    const editor = useEditor((root) =>
        Editor.make()
            .config((ctx) => {
              ctx.set(rootCtx, root)
              ctx.set(defaultValueCtx, '# Milkdown 💖 Vue')
            })
            .use(nord)
            .use(commonmark)
    )
    return {
      editor
    }
  }
}
</script>

<style scoped>

</style>