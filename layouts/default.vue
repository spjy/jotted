<template>
  <div>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="home">
        <a-icon type="home" /> Homework Help
      </a-menu-item>
      <a-menu-item key="invite">
        <a
          href="https://discord.gg/YudDZtb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a-icon type="book" /> Discord Invite
        </a>
      </a-menu-item>
      <a-menu-item key="guides" disabled>
        <a-icon type="book" /> Guides
      </a-menu-item>
    </a-menu>

    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ['home']
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
