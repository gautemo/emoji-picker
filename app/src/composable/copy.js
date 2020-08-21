import { ref } from 'vue'
import { addToRecently } from './recentlyUsed.js'

const copied = ref('')
let timer

const copy = emoji => {
  if(timer){
    clearTimeout(timer)
    timer = null
  }
  navigator.clipboard.writeText(emoji.emoji)
  addToRecently(emoji)
  copied.value = emoji.emoji
  timer = setTimeout(() => copied.value = '', 2000)
}

export { copied, copy }