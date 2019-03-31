<template>
  <div>
    <Header
      header="Homework Help"
      description="A Discord server to help people with their math, science, social
      studies, English, computer science, art, or language homework."
    />

    <br />

    <a-row :gutter="0" type="flex" justify="center">
      <a-col class="gutter-row" :sm="24" :md="24" :lg="4">
        <a-card title="Question" :bordered="false">
          Ask questions about homework topics you don't understand.
        </a-card>
      </a-col>
      <a-col class="gutter-row" :sm="24" :md="24" :lg="4">
        <a-card title="Answer" :bordered="false">
          Answer questions to help out others in subjects you're an expert in.
        </a-card>
      </a-col>
      <a-col class="gutter-row" :sm="24" :md="24" :lg="4">
        <a-card title="Collaborate" :bordered="false">
          Talk to other members to work out difficult problems.
        </a-card>
      </a-col>
    </a-row>

    <br />

    <div class="off-card text-center p-10">
      <h2 class="text-white">Interested in joining? Look no further.</h2>

      <a
        href="https://discord.gg/YudDZtb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <a-button type="primary" icon="link" size="large">
          Join the Discord
        </a-button>
      </a>
    </div>

    <br />

    <a-row :gutter="0" type="flex" justify="center">
      <a-col class="gutter-row" :sm="24" :md="24" :lg="4">
        <a-card title="Challenge" :bordered="false">
          Apply your knowledge in math and science to solve
          <span className="channel-format"> #challenges</span>.
        </a-card>
      </a-col>
      <a-col class="gutter-row" :sm="24" :md="24" :lg="4">
        <a-card title="Defend" :bordered="false">
          Defend your opinion on controversial topics each week in
          <span className="channel-format"> #debates</span>.
        </a-card>
      </a-col>
      <a-col class="gutter-row" :sm="24" :md="24" :lg="4">
        <a-card title="Create" :bordered="false">
          Show off your creative side and create pieces of art in
          <span className="channel-format"> #creativity</span>.
        </a-card>
      </a-col>
    </a-row>

    <br />

    <div class="off-card text-white text-center p-3">
      Copyright &copy; 2019 Homework Help. Vector Art by
      <a href="https://www.vecteezy.com"> Vecteezy.</a>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
import '@/assets/css/app.css'

export default {
  components: {
    Header
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  padding-bottom: 15px;
  font-size: 1rem;
}

.links {
  padding-top: 15px;
}

.channel-format {
  color: #667ec9;
  background-color: #f3f3f3;
}
</style>
