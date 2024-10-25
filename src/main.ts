import './style.css'
import { App, Text } from '@zd~/shapex'

const app = new App()
const t = new Text({
  text: '@zd~/shapex',
  style: {
    fontSize: 18,
  },
})
t.position.set(200)
app.add(t)
document.body.appendChild(app.canvas)

let d = 1
function update() {
  t.rotation += 0.01
  const scale = 0.01
  t.scale.set(t.scale.x += d * scale)
  if (t.scale.x > 2 || t.scale.x < -2) {
    d *= -1
  }
  requestAnimationFrame(update)
}
requestAnimationFrame(update)
