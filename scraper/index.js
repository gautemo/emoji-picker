import fs from 'fs'
import fetch from 'node-fetch'
import jsdom from 'jsdom'
const { JSDOM } = jsdom

const downloadEmojis = async () => {
  const emojis = []

  const response = await fetch('https://unicode.org/emoji/charts/full-emoji-list.html')
  const text = await response.text()
  const document = new JSDOM(text).window.document;
  const tableRows = document.querySelectorAll('tr');
  for (const tr of tableRows) {
    try {
      emojis.push({
        emoji: tr.querySelector('.chars').textContent,
        name: tr.querySelector('.name').textContent
      })
    } catch (err) {

    }
  }

  fs.writeFile('emojis.json', JSON.stringify(emojis, null, 2), 'utf-8', () => console.log('done'))
}

downloadEmojis()