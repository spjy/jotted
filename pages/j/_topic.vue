<template>
  <div>
    <Header header="Calculus" description="Limits" />
    <div class="bg-blue-lightest">
      <!-- <div class="p-3 flex justify-center">
        <a-card class="w-64 text-center">
          <h3>Table of Contents</h3>
          <li>Test</li>
        </a-card>
      </div> -->
      <div class="flex h-full">
        <div class="w-2/5 mx-auto p-4">
          <a-card class="text-center">
            <h3>Table of Contents</h3>
            <li>Test</li>
          </a-card>
          <br />
          <a-card>
            <h1>Calculators</h1>
          </a-card>
        </div>
        <div class="w-3/5">
          <div class="mx-auto p-4">
            <a-card>
              <div class="font" v-html="markdown"></div>
            </a-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
import katex from 'katex'
import Mdi from 'markdown-it'
import mdia from 'markdown-it-attrs'
import mditm from 'markdown-it-texmath'
import mdih from 'markdown-it-highlight'
import '@/assets/css/katex.min.css'
import '@/assets/css/app.css'
import '@/assets/css/markdown.css'
import 'markdown-it-highlight/dist/index.css'

export default {
  components: {
    Header
  },
  async asyncData({ params }) {
    const markdown = await import(`~/static/topics/${params.topic}.md`)

    mditm.use(katex)

    const render = Mdi()
      .use(mdia)
      .use(mditm, {
        delimiters: 'dollars',
        macros: { '\\RR': '\\mathbb{R}' }
      })
      .use(mdih)

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
