<template>
  <main>
    <search v-model:text="search"/>
    <p>Click to copy</p>
    <div class="categories">
      <button v-for="category in categories" :key="category" @click="toggleFilter(category)" :class="{active: filter === category}">{{category}}</button>
    </div>
    <div class="emoji-content">
      <emojisCategory v-for="e in showEmojis" :key="e.category" :category="e.category" :emojis="e.emojis" :search="search"/>
    </div>
  </main>
</template>

<script>
import { ref, computed } from 'vue'

import Emoji from './components/Emoji.vue'
import Search from './components/Search.vue'
import EmojisCategory from './components/EmojisCategory.vue'
import emojis from './assets/emojis.json'

const categories = emojis.map(e => e.category)

export default {
  name: 'App',
  setup(){
    const search = ref('')
    
    const filter = ref('')
    const toggleFilter = category => {
      if(filter.value === category){
        filter.value = ''
      }else{
        filter.value = category
      }
    }
    
    const showEmojis = computed(() => emojis.filter(e => filter.value.length === 0 || filter.value === e.category))
    return {showEmojis, search, categories, filter, toggleFilter}
  },
  components: {
    Emoji,
    Search,
    EmojisCategory
  }
}
</script>

<style scoped>
main{
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto auto 1fr;
}

.emoji-content{
  overflow: auto;
}

p{
  margin: 5px 25px;
  text-decoration: underline;
  font-style: italic;
  font-size: 1.2em;
}

.categories{
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 5px;
  justify-content: space-around;
}

.categories button{
  font-size: 1.05em;
  background: none;
  border: 3px solid #fda085;
  border-radius: 3px;
  min-width: 90px;
  white-space: pre-wrap;
  cursor: pointer;
  display: flex;
  justify-content: center;
}

.categories button.active{
  background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  border-color: #8d21dc; /*#21dcbd;*/
}

.categories button:focus{
  outline: none;
  border-color: #8d21dc; /*#21dcbd;*/
}

@media only screen and (max-width: 800px) {
  .categories{
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 600px) {
  .categories{
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>