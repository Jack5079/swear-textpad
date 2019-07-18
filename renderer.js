// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { clipboard } = require('electron')
var { purify } = require('profanity-util')

document.querySelectorAll('textarea')[0].oninput = () => {
  document.querySelectorAll('textarea')[0].value = purify(document.querySelectorAll('textarea')[0].value)[0]
}

document.getElementById('copy').onclick = () => {
  clipboard.writeText(document.querySelectorAll('textarea')[0].value)
  var x = document.getElementById('snackbar')

  // Add the "show" class to DIV
  x.className = 'show'

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () { x.className = x.className.replace('show', '') }, 3000)
}
