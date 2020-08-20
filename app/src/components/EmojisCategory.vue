<template>
  <p v-if="showEmojis.length > 0">{{category}}</p>
  <div class="emoji-list">
    <emoji v-for="e in showEmojis" :key="e.emoji" :description="e.description" :emoji="e.emoji"/>
  </div>
</template>

<script>
import Emoji from './Emoji.vue'
import { computed } from 'vue'

export default {
  props: {
    category: String,
    emojis: Array,
    search: String
  },
  setup(props){
    const showEmojis = computed(() => {
      if(props.search.length === 0){
        return props.emojis
      }
      return props.emojis.filter(e => e.description.toLowerCase().includes(props.search.toLowerCase()))
    })
    return { showEmojis }
  },
  components: {
    Emoji,
  }
}
</script>

<style scoped>
p{
  margin: 25px 0 10px 25px;
  border-bottom: 2px solid #fda085;
  width: fit-content;
  font-size: 1.3em;
}
</style>