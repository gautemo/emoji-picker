<template>
  <button @click="copy" :title="name">{{emoji}}</button>
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

<style>

</style>