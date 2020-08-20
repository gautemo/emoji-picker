<template>
  <div class="emoji-list">
    <emoji v-for="e in showEmojis" :key="e.emoji" :description="e.description" :emoji="e.emoji"/>
  </div>
</template>

<script>
import Emoji from './Emoji.vue'
import { computed } from 'vue'

export default {
  props: {
    emojis: Array,
    search: String
  },
  setup(props){
    const showEmojis = computed(() => {
      const setEmojis = props.emojis.reduce((acc, current) => {
        if(!acc.map(e => e.emoji).includes(current.emoji)){
          acc.push(current)
        }
        return acc
      }, [])
      return setEmojis.filter(e => e.description.toLowerCase().includes(props.search.toLowerCase()))
    })
    return { showEmojis }
  },
  components: {
    Emoji,
  }
}
</script>