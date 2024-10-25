const app = document.getElementById('app')!
function init() {
  updateAppText(new Date())
  requestAnimationFrame(init)
}

function updateAppText(t: Date) {
  const appTextContent = app.textContent
  const nextText = t.toLocaleTimeString()
  if (appTextContent !== nextText) {
    app.textContent = nextText
  }
}

init()
