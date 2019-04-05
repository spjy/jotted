import Vue from 'vue'
import katex from 'katex'
import Mdi from 'markdown-it'
import mdia from 'markdown-it-attrs'
import mditm from 'markdown-it-texmath'
import mdih from 'markdown-it-highlight'
import mdifm from 'markdown-it-front-matter'
import mditocaa from 'markdown-it-toc-and-anchor'

function markdownIt(markdown) {
  const output = {
    frontmatter: {},
    toc: {}
  }

  mditm.use(katex)

  const mdi = Mdi()
    .use(mdia)
    .use(mditm, {
      delimiters: 'dollars',
      macros: { '\\RR': '\\mathbb{R}' }
    })
    .use(mdih)
    .use(mdifm, fm => {
      fm.split('\n').forEach(kv => {
        const value = kv.split(': ')

        output.frontmatter[value[0]] = value[1]
      })
    })
    .use(mditocaa, {
      tocCallback: (markdown, array, html) => {
        output.toc = array
        // eslint-disable-next-line
        console.log(array)
      }
    })

  output.output = mdi.render(markdown)

  return output
}

Vue.prototype.$markdown = markdown => {
  return markdownIt(markdown)
}
