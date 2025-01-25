import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

// DEV環境の時 ServiceWorker の起動
import { worker } from './mocks/browser'
if (import.meta.env.DEV) {
	worker.start()
}

const appElement = document.querySelector<HTMLDivElement>('#app')
if (appElement) {
	appElement.innerHTML = `
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1>Vite + TypeScript</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
  `
}

const counterButton = document.querySelector<HTMLButtonElement>('#counter')
if (counterButton) {
	setupCounter(counterButton)
}
