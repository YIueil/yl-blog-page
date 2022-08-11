<template>
  <VueEditor :editor="editor" />
</template>

<script>
import { Editor, rootCtx, defaultValueCtx } from '@milkdown/core'
import { nord } from '@milkdown/theme-nord'
import { VueEditor, useEditor } from '@milkdown/vue'
import { gfm } from '@milkdown/preset-gfm'

import { tooltip } from '@milkdown/plugin-tooltip'
import { menu } from '@milkdown/plugin-menu'

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
              ctx.set(defaultValueCtx, '# Milkdown 💖 Vue ')
            })
            .use(menu)
            .use(tooltip)
            .use(nord)
            .use(gfm)
    )
    return {
      editor
    }
  }
}
</script>

<style scoped>

</style>