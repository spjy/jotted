import Vue from 'vue'
import katex from 'katex'
import mdIt from 'markdown-it'
import mdAttributes from 'markdown-it-attrs'
import mdTexMath from 'markdown-it-texmath'
import mdHighlight from 'markdown-it-highlight'
import mdFrontMatter from 'markdown-it-front-matter'
import mdTableOfContentsAndAnchor from 'markdown-it-toc-and-anchor'

function markdownIt(markdown) {
  const output = {
    frontmatter: {},
    toc: {}
  }

  mdAttributes.use(katex)

  const markdownIt = mdIt()
    .use(mdAttributes)
    .use(mdTexMath, {
      delimiters: 'dollars',
      macros: { '\\RR': '\\mathbb{R}' }
    })
    .use(mdHighlight)
    .use(mdFrontMatter, fm => {
      fm.split('\n').forEach(kv => {
        const value = kv.split(': ')

        output.frontmatter[value[0]] = value[1]
      })
    })
    .use(mdTableOfContentsAndAnchor, {
      tocCallback: (markdown, array, html) => {
        output.toc = array
        // eslint-disable-next-line
        console.log(array)
      }
    })

  output.output = markdownIt.render(markdown)

  return output
}

Vue.prototype.$markdown = markdown => {
  return markdownIt(markdown)
}
