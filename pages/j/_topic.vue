<template>
  <div>
    {{ markdown }}
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const markdown = await import(`~/assets/topics/${params.topic}.md`)

    return { markdown: markdown }
  }
}
</script>

<style></style>
