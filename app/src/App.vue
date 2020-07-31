<template>
  <main>
    <search v-model:text="search"/>
    <p>Click to copy</p>
    <div class="emoji-list">
      <emoji v-for="emoji in showEmojis" :key="emoji.name" :name="emoji.name" :emoji="emoji.emoji"/>
    </div>
  </main>
</template>

<script>
import { ref, computed } from 'vue'

import Emoji from './components/Emoji.vue'
import Search from './components/Search.vue'
import emojis from './assets/emojis.json'

export default {
  name: 'App',
  setup(){
    const search = ref('')
    const showEmojis = computed(() => emojis.filter(e => search.value.length === 0 || e.name.includes(search.value)))
    return {showEmojis, search}
  },
  components: {
    Emoji,
    Search
  }
}
</script>

<style scoped>
main{
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto 1fr;
}

.emoji-list{
  overflow: auto;
}

p{
  margin: 5px 25px;
  text-decoration: underline;
  font-style: italic;
  font-size: 1.2em;
}
</style>