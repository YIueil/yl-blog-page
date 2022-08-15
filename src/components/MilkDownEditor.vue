<template>
  <VueEditor :editor="editor"/>
</template>

<script>
import {Editor, rootCtx, defaultValueCtx} from '@milkdown/core'
import {nord} from '@milkdown/theme-nord'
import {VueEditor, useEditor} from '@milkdown/vue'
import {gfm} from '@milkdown/preset-gfm'

import {history} from '@milkdown/plugin-history' // 撤销和重做支持

import {menu} from '@milkdown/plugin-menu' // 菜单按钮
import {clipboard} from '@milkdown/plugin-clipboard' // 剪切板增强
import {indent} from '@milkdown/plugin-indent' // 缩进支持
import {slash} from '@milkdown/plugin-slash' // 斜杠命令支持
import {block} from '@milkdown/plugin-block' // 块选择支持

import {prism} from '@milkdown/plugin-prism' // 代码高亮支持 依赖 prism-themes 包

export default {
  name: 'MilkDownEditor',
  components: {
    VueEditor
  },
  setup() {
    const editor = useEditor((root) =>
        Editor.make()
            .config((ctx) => {
              ctx.set(rootCtx, root)
              ctx.set(defaultValueCtx, '# h1\n' +
                  '\n' +
                  '## h2\n' +
                  '\n' +
                  '## h3\n' +
                  '\n' +
                  '#### h4\n' +
                  '\n' +
                  '##### h5\n' +
                  '\n' +
                  '###### h6\n' +
                  '\n' +
                  '普通文本内容\n')
            })
            .use(gfm)
            .use(history)
            .use(clipboard)
            .use(indent)
            .use(menu)
            .use(nord)
            .use(block)
            .use(slash)
            .use(prism)
    )
    return {
      editor
    }
  }
}
</script>

<style scoped>
/deep/ .milkdown .editor h1 {
  font-size: 24px;
}

/deep/ .milkdown .editor h2 {
  font-size: 20px;
}

/deep/ .milkdown .editor h3 {
  font-size: 18px;
}

/deep/ .milkdown .editor h4 {
  font-size: 16px;
}

/deep/ .milkdown .editor h5 {
  font-size: 16px;
}

/deep/ .milkdown .editor h6 {
  font-size: 16px;
}
</style>