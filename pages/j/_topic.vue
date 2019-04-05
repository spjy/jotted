<template>
  <div>
    <Header
      :header="frontmatter ? frontmatter.header : ''"
      :description="frontmatter ? frontmatter.description : ''"
    />
    <div class="bg-blue-lightest">
      <!-- <div class="p-3 flex justify-center">
        <a-card class="w-64 text-center">
          <h3>Table of Contents</h3>
          <li>Test</li>
        </a-card>
      </div> -->
      <div class="sm:block md:flex lg:flex xl:flex">
        <div class="sm:w-full md:w-1/5 lg:w-1/5 xl:w-1/5 mx-auto p-4">
          <a-anchor
            class="sm:invisible md:visible lg: visible xl:visible"
            :offsetTop="30"
          >
            <a-anchor-link
              v-for="content in toc"
              :href="`#${content.anchor}`"
              :title="content.content"
              :key="content.anchor"
              :style="`text-indent: ${0.6 * (content.level - 1)}em`"
            />
            <!-- <a-anchor-link
              href="#components-anchor-demo-static-anchor"
              title="Fixed demo"
            />
            <a-anchor-link href="#API" title="API">
              <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
              <a-anchor-link href="#Link-Props" title="Link Props" />
            </a-anchor-link> -->
            <!-- <div v-html="toc"></div> -->
          </a-anchor>
          <!-- <br />
          <a-card>
            <h1>Calculators</h1>
          </a-card> -->
        </div>
        <div class="sm:w-full md:w-4/5 lg:w-4/5 xl:w-4/5">
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
import Vue from 'vue'
import Header from '~/components/Header'
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

    const { output, frontmatter, toc } = Vue.prototype.$markdown(
      markdown.default
    )

    return {
      markdown: output,
      frontmatter,
      toc
    }
  },
  mounted() {
    // eslint-disable-next-line
    console.log(this.toc)
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
