import { ref } from 'vue'

const recently = ref([])

recently.value = JSON.parse(localStorage.getItem('latest')) ?? []

const addToRecently = emoji => {
  const existAt = recently.value.findIndex(e => e.emoji === emoji.emoji)
  if(existAt !== -1){
    recently.value.splice(existAt, 1)
  }
  recently.value.splice(15)
  recently.value = [emoji, ...recently.value]
  localStorage.setItem('latest', JSON.stringify(recently.value))
}

export { recently, addToRecently }
