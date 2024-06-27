import './style.css'

const app = document.getElementById('app')!

function init() {
  updateAppText(new Date())
  requestAnimationFrame(init)
}

function updateAppText(date: Date) {
  const currText = app.textContent
  const nextText = `[vanilla js] now is ${date.toLocaleTimeString()}`
  if (currText !== nextText) {
    app.textContent = nextText
  }
}

init()
