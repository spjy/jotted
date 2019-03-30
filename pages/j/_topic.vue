<template>
  <div>
    <div class="header-lg header-sm text-center text-white">
      <h1 class="text-white">
        Calculus
      </h1>
      <p>Limits.</p>
    </div>
    <div class="font p-10 h-full bg-grey-lighter" v-html="markdown"></div>
  </div>
</template>

<script>
import katex from 'katex'
import Mdi from 'markdown-it'
import mdia from 'markdown-it-attrs'
import mditm from 'markdown-it-texmath'
import '@/assets/css/katex.min.css'
import '@/assets/css/app.css'

export default {
  async asyncData({ params }) {
    const markdown = await import(`~/static/topics/${params.topic}.md`)

    mditm.use(katex)

    const render = Mdi()
      .use(mdia)
      .use(mditm, {
        delimiters: 'dollars',
        macros: { '\\RR': '\\mathbb{R}' }
      })

    return {
      markdown: render.render(markdown.default)
    }
  },
  mounted() {
    // eslint-disable-next-line
    console.log(this.markdown)
  }
}
</script>

<style>
.font {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: normal;
}
</style>
