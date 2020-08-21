<template>
  <p class="category" v-if="recently.length > 0">⭐ Recently Used</p>
  <div class="emoji-list">
    <emoji v-for="e in recently" :key="e.emoji" :description="e.description" :emoji="e.emoji"/>
  </div>
</template>

<script>
import Emoji from './Emoji.vue'
import { computed } from 'vue'
import { recently } from '../composable/recentlyUsed.js'

export default {
  setup(){
    return { recently }
  },
  components: {
    Emoji,
  }
}
</script>

<style scoped>
.category{
  margin: 0 0 10px 25px;
}
</style>