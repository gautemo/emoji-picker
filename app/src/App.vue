<template>
  <emoji v-for="emoji in emojis" :key="emoji.name" :name="emoji.name" :emoji="emoji.emoji"/>
</template>

<script>
import Emoji from './components/Emoji.vue'
import emojis from './assets/emojis.json'

export default {
  name: 'App',
  setup(){
    return {emojis}
  },
  components: {
    Emoji
  }
}
</script>
