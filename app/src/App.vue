<template>
  <main>
    <search v-model:text="search"/>
    <p class="instruction">Click to copy</p>
    <section>
      <div class="categories" v-show="!search">
        <button v-for="category in categories" :key="category" @click="toggleFilter(category)" :class="{active: filter === category}">{{category}}</button>
      </div>
      <div class="emoji-content">
        <recently-used v-if="!search && !filter"/>
        <emojis-category v-for="e in categoryEmojis" :key="e.category" :category="e.category" :emojis="e.emojis"/>
        <search-emojis :emojis="searchEmojis" :search="search"/>
      </div>
    </section>
  </main>
  <copied/>
</template>

<script>
import { ref, computed, watchEffect } from 'vue'

import Emoji from './components/Emoji.vue'
import Search from './components/Search.vue'
import EmojisCategory from './components/EmojisCategory.vue'
import SearchEmojis from './components/SearchEmojis.vue'
import Copied from './components/Copied.vue'
import RecentlyUsed from './components/RecentlyUsed.vue'
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

    watchEffect(() => {
      if(search.value){
        filter.value = ''
      }
    })
    
    const filteredEmojis = computed(() => emojis.filter(e => filter.value.length === 0 || filter.value === e.category))
    const categoryEmojis = computed(() => {
      if(search.value.length === 0){
        return filteredEmojis.value
      }
      return []
    })
    const searchEmojis = computed(() => {
      if(search.value.length === 0){
        return []
      }
      return filteredEmojis.value.flatMap(e => e.emojis)
    })
    return {categoryEmojis, searchEmojis, search, categories, filter, toggleFilter}
  },
  components: {
    Emoji,
    Search,
    EmojisCategory,
    SearchEmojis,
    Copied,
    RecentlyUsed
  }
}
</script>

<style scoped>
main{
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto 1fr;
}

section{
  overflow: auto;
}

.emoji-content{
  padding: 5px 0;
}

.instruction{
  text-decoration: underline;
  font-style: italic;
  font-size: 1.2em;
  box-shadow: 0px 1px 8px 5px #ffffff;
  padding: 5px 25px;
  margin: 0;
  z-index: 1;
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