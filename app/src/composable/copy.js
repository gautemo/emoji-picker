import { ref } from 'vue'

const copied = ref('')
let timer

const copy = emoji => {
  if(timer){
    clearTimeout(timer)
    timer = null
  }
  navigator.clipboard.writeText(emoji)
  copied.value = emoji
  timer = setTimeout(() => copied.value = '', 2000)
}

export { copied, copy }