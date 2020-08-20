<template>
  <p class="category">{{category}}</p>
  <div class="emoji-list">
    <emoji v-for="e in emojis" :key="e.emoji" :description="e.description" :emoji="e.emoji"/>
  </div>
</template>

<script>
import Emoji from './Emoji.vue'
import { computed } from 'vue'

export default {
  props: {
    category: String,
    emojis: Array,
  },
  components: {
    Emoji,
  }
}
</script>