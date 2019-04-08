<template>
  <div>
    <Header
      header="Guides"
      description="Quick notes of various academic topics."
    />
    <div class="flex p-4 flex-wrap">
      <nuxt-link
        v-for="topic in topics"
        :key="topic.title"
        :to="`/guides/${topic.url}`"
        class="flex-1 p-2"
      >
        <a-card hoverable :title="topic.title">
          {{ topic.description }}
        </a-card>
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
      topics: [
        {
          title: 'Calculus',
          url: 'calculus',
          description: 'The study of limits.'
        },
        {
          title: 'Fourier Series',
          url: 'fourier',
          description:
            'Manipulation of sinusoids for expansion of periodic functions.'
        },
        {
          title: 'Linear Algebra',
          url: 'linear',
          description: 'The study of linear equations.'
        },
        {
          title: 'Microelectronics',
          url: 'microelectronics',
          description: 'The study of small eletrical components.'
        }
      ]
    }
  }
}
</script>

<style>
.clickable {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
}
</style>
