<template>
  <label>
    Search
    <input type="text" @input="$emit('update:text', $event.target.value)">
  </label>
</template>

<style scoped>
label{
  background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  margin: 10px 25px;
  padding: 3px 3px 3px 15px;
  border-radius: 100px;
  display: flex;
  font-size: 2em;
}

input{
  flex: 1;
  border-radius: 20px 100px 100px 20px;
  height: 100%;
  border: none;
  margin-left: 15px;
  font-size: inherit;
}
</style>