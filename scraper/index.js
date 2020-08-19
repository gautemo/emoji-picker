import fs from 'fs'
import fetch from 'node-fetch'
import jsdom from 'jsdom'
const { JSDOM } = jsdom

const getCategory = async (subpath, category) => {
  const response = await fetch(`https://emojipedia.org/${subpath}`)
  const text = await response.text();
  const document = new JSDOM(text).window.document;
  const list = document.querySelector('.emoji-list');
  const emojiCategory = { category, emojis: []}
  for(const li of list.children){
    const description = li.children[0].textContent
    const emoji = li.children[0].children[0].textContent
    emojiCategory.emojis.push({emoji, description})
  }
  return emojiCategory
}

const addCategoriesToFile = async () => {
  const c1 = getCategory('people', '😃\nSmileys & People')
  const c2 = getCategory('nature', '🐻\nAnimals & Nature')
  const c3 = getCategory('food-drink', '🍔\nFood & Drink')
  const c4 = getCategory('activity', '⚽\nActivity')
  const c5 = getCategory('travel-places', '🌇\nTravel & Places')
  const c6 = getCategory('objects', '💡\nObjects')
  const c7 = getCategory('symbols', '❤️\nSymbols')
  const c8 = getCategory('flags', '🎌\nFlags')
  const emojis = await Promise.all([c1, c2, c3, c4, c5, c6, c7, c8])
  fs.writeFile('../app/src/assets/emojis.json', JSON.stringify(emojis, null, 2), 'utf-8', () => console.log('done'))
}

addCategoriesToFile()