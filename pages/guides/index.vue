<template>
  <div>
    <Header
      header="Guides"
      description="Quick notes of various academic topics."
    />
    <div class="flex p-4 flex-wrap">
      <nuxt-link
        v-for="topic in topics"
        :key="topic"
        :to="`/guides/${topic}`"
        class="flex-1 p-2"
      >
        <a-card hoverable :title="topic.toUpperCase()" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  },
  data() {
    return {
      topics: []
    }
  },
  methods: {
    /**
     * Processes the imported file strings and extracts the name.
     * @param {String[]} files The files within a certain directory.
     */
    importAll(files) {
      files.keys().forEach(file => {
        this.topics.push(file.match(/\/(.*?)\./)[1])
      })
    }
  },
  mounted() {
    this.importAll(
      require.context('../../static/jotted-topics/', true, /\.md$/)
    )
  }
}
</script>

<style>
.clickable {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
}
</style>
