import Vue from 'vue'
import katex from 'katex'
import mdIt from 'markdown-it'
import mdAttributes from 'markdown-it-attrs'
import mdTexMath from 'markdown-it-texmath'
import mdHighlight from 'markdown-it-highlight'
import mdFrontMatter from 'markdown-it-front-matter'
import mdTableOfContentsAndAnchor from 'markdown-it-toc-and-anchor'

/**
 * Function to process markdown files.
 * @param {*} markdown The markdown file to process
 */
function markdownIt(markdown) {
  const output = {
    frontmatter: {},
    toc: {}
  }

  // Integrate KaTeX into markdown it plugin
  mdTexMath.use(katex)

  // Load plugins into markdown it
  const markdownIt = mdIt()
    .use(mdAttributes)
    .use(mdTexMath, {
      delimiters: 'dollars',
      macros: { '\\RR': '\\mathbb{R}' }
    })
    .use(mdHighlight)
    .use(mdFrontMatter, fm => {
      // Extract frontmatter variables from markdown file
      fm.split('\n').forEach(kv => {
        const value = kv.split(': ')

        output.frontmatter[value[0]] = value[1]
      })
    })
    .use(mdTableOfContentsAndAnchor, {
      // Extract headers and insert into table of contents key
      tocCallback: (markdown, array, html) => {
        output.toc = array
        // eslint-disable-next-line
        console.log(array)
      }
    })

  // Get output from markdown it renderer
  output.output = markdownIt.render(markdown)

  return output
}

Vue.prototype.$markdown = markdown => {
  return markdownIt(markdown)
}
