<template>
  <button @click="copy" :title="name" class="emoji">{{emoji}}</button>
</template>

<script>
export default {
  props: {
    emoji: String,
    name: String
  },
  setup({emoji}){
    const copy = () => navigator.clipboard.writeText(emoji)
    return {copy}
  }
}
</script>