<!-- vue3 MilkDown 编辑器 -->
<template>
  <VueEditor :editor="editor" />
</template>

<script>

import _ from 'loadsh'
import { store } from '@/store/store'
import {
  Editor,
  rootCtx,
  defaultValueCtx,
  editorViewCtx,
  serializerCtx,
  themeManagerCtx,
  editorViewOptionsCtx
} from '@milkdown/core'
import { nord } from '@milkdown/theme-nord'
import { VueEditor, useEditor } from '@milkdown/vue'
import { gfm } from '@milkdown/preset-gfm'

import { replaceAll, forceUpdate } from '@milkdown/utils' // 宏

import { listener, listenerCtx } from '@milkdown/plugin-listener' // 内容监听

import { history } from '@milkdown/plugin-history' // 撤销和重做支持
import { clipboard } from '@milkdown/plugin-clipboard' // 剪切板增强
import { indent } from '@milkdown/plugin-indent' // 缩进支持
import { slash, slashPlugin, createDropdownItem, defaultActions } from '@milkdown/plugin-slash' // 斜杠命令支持
import { block } from '@milkdown/plugin-block' // 块选择支持
import { prism } from '@milkdown/plugin-prism' // 代码高亮支持 依赖 prism-themes

export default {
  name: 'MilkDownEditor',
  components: {
    VueEditor
  },
  props: {
    markdownText: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    onMarkdownUpdated: {
      type: Function,
      default: (ctx, next) => {
        store.currentPage.dataRef.title = next.slice(0, next.indexOf('\n')).replace('#', '').trim()
        store.currentPage.dataRef.content = next
        if (!store.$onSave) {
          store.$onSave = _.debounce(function () {
            console.log(`save on 3000 ms`, _.cloneDeep(store.currentPage))
          }, 3000)
        }
        store.$onSave()
      }
    }
  },
  data () {
    return {
      store: store
    }
  },
  setup (props) {
    const editable = () => !props.readonly
    const editor = useEditor((root) => {
      return Editor.make()
          .config((ctx) => {
            ctx.set(rootCtx, root)
            ctx.set(defaultValueCtx, props.markdownText) // 初始化内容
            ctx.set(editorViewOptionsCtx, { editable }) // 是否可编辑
            ctx.get(listenerCtx).markdownUpdated((ctx, markdown, prevMarkdown) => {
              props.onMarkdownUpdated(ctx, markdown, prevMarkdown)
            })
          })
          .use(gfm)
          .use(listener)
          .use(history)
          .use(clipboard)
          .use(indent)
          .use(nord)
          .use(block)
          .use(slash.configure(slashPlugin, {
            config: (ctx) => {
              return ({ content, isTopLevel }) => {
                if (!isTopLevel) return null

                const mapActions = (action) => {
                  const { id = '' } = action
                  switch (id) {
                    case 'h1':
                      action.dom = createDropdownItem(
                          ctx.get(themeManagerCtx),
                          '一级标题',
                          'h1'
                      )
                      return action
                    case 'h2':
                      action.dom = createDropdownItem(
                          ctx.get(themeManagerCtx),
                          '二级标题',
                          'h2'
                      )
                      return action
                    case 'h3':
                      action.dom = createDropdownItem(
                          ctx.get(themeManagerCtx),
                          '三级标题',
                          'h3'
                      )
                      return action
                    case 'bulletList':
                      action.dom = createDropdownItem(
                          ctx.get(themeManagerCtx),
                          '无序列表',
                          'bulletList'
                      )
                      return action
                    case 'orderedList':
                      action.dom = createDropdownItem(
                          ctx.get(themeManagerCtx),
                          '有序列表',
                          'orderedList'
                      )
                      return action
                    case 'taskList':
                      action.dom = createDropdownItem(
                          ctx.get(themeManagerCtx),
                          '待办列表',
                          'taskList'
                      )
                      return action
                    case 'table':
                      action.dom = createDropdownItem(
                          ctx.get(themeManagerCtx),
                          '表格',
                          'table'
                      )
                      return action
                    case 'image':
                      action.dom = createDropdownItem(
                          ctx.get(themeManagerCtx),
                          '图片',
                          'image'
                      )
                      return action
                    case 'blockquote':
                      action.dom = createDropdownItem(
                          ctx.get(themeManagerCtx),
                          '引用',
                          'quote'
                      )
                      return action
                    case 'code':
                      action.dom = createDropdownItem(
                          ctx.get(themeManagerCtx),
                          '代码块',
                          'code'
                      )
                      return action
                    case 'divider':
                      action.dom = createDropdownItem(
                          ctx.get(themeManagerCtx),
                          '分割线',
                          'divider'
                      )
                      return action
                    default:
                      return action
                  }
                }

                if (content.startsWith('/')) {
                  return content === '/'
                      ? {
                        placeholder: '<(￣︶￣)↗[GO!]',
                        actions: defaultActions(ctx).map(mapActions)
                      }
                      : {
                        actions: defaultActions(ctx, content).map(mapActions)
                      }
                }
                return null
              }
            }
          }))
          .use(prism)
    })
    return {
      editor
    }
  },
  methods: {
    async getMarkDownText () {
      const editor = this.editor.getInstance()
      return editor.action((ctx) => {
        const editorView = ctx.get(editorViewCtx)
        const serializer = ctx.get(serializerCtx)
        return serializer(editorView.state.doc)
      })
    },
    async switchReadMode () {
      const editable = () => !store.config.readOnly
      const editor = this.editor.getInstance()
      editor.config((ctx) => {
        ctx.set(editorViewOptionsCtx, { editable })
      })
      editor.action(forceUpdate())
    },
    async replaceAllText () {
      this.editor.getInstance().action(replaceAll(store.currentPage.content))
    }
  },
  mounted () {
    this.$Event.on('onReadModeChange', this.switchReadMode)
    this.$Event.on('onPageChange', this.replaceAllText)
  }
}
</script>

<style scoped>
::v-deep(.milkdown .editor h1) {
  font-size: 24px;
}

::v-deep(.milkdown .editor h2) {
  font-size: 20px;
}

::v-deep(.milkdown .editor h3) {
  font-size: 18px;
}

::v-deep(.milkdown .editor h4) {
  font-size: 16px;
}

::v-deep(.milkdown .editor h5) {
  font-size: 16px;
}

::v-deep(.milkdown .editor h6) {
  font-size: 16px;
}

::v-deep(.milkdown) {
  box-shadow: none;
}

::v-deep(.milkdown .editor) {
  padding: unset;
}
</style>