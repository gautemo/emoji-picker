<template>
  <transition name="fade">
    <p v-if="copied" class="copied">{{copied}} copied to clipboard</p>
  </transition>
</template>

<script>
import { copied } from '../composable/copy.js'

export default {
  setup(){
    return { copied }
  }
}
</script>

<style scoped>
.copied{
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: auto;
  width: fit-content;
  font-size: 1.5em;
  background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  border-radius: 100px;
  padding: 10px 25px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>