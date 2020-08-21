<template>
  <button @click="copy({emoji, description})" :title="description" class="emoji">{{emoji}}</button>
</template>

<script>
import { copy } from '../composable/copy.js'

export default {
  props: {
    emoji: String,
    description: String
  },
  setup(){
    return { copy }
  }
}
</script>