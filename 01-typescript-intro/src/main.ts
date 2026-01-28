import './style.css'
import { setupCounter } from './counter.ts'
import { charmander } from './bases/05-decorators.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${charmander.name} ${charmander.id}!</h1>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
