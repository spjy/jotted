import Vue from 'vue'
import katex from 'katex'
import Mdi from 'markdown-it'
import mdia from 'markdown-it-attrs'
import mditm from 'markdown-it-texmath'
import mdih from 'markdown-it-highlight'
import mdifm from 'markdown-it-front-matter'
import mditocaa from 'markdown-it-toc-and-anchor'

Vue.prototype.$markdown = markdown => {
  mditm.use(katex)

  const frontmatter = {}
  let toc

  const mdi = Mdi()
    .use(mdia)
    .use(mditm, {
      delimiters: 'dollars',
      macros: { '\\RR': '\\mathbb{R}' }
    })
    .use(mdih)
    .use(mdifm, fm => {
      // eslint-disable-next-line
      fm.split('\n').forEach(kv => {
        const value = kv.split(': ')

        frontmatter[value[0]] = value[1]
      })
    })
    .use(mditocaa, {
      tocCallback: (markdown, array, html) => {
        // eslint-disable-next-line
        console.log(html)
        toc = html
      }
    })

  return {
    frontmatter,
    toc,
    output: mdi.render(markdown)
  }
}
