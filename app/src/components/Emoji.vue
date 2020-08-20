<template>
  <button @click="copy" :title="description" class="emoji">{{emoji}}</button>
</template>

<script>
export default {
  props: {
    emoji: String,
    description: String
  },
  setup({emoji}){
    const copy = () => navigator.clipboard.writeText(emoji)
    return {copy}
  }
}
</script>