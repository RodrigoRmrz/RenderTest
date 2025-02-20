import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
 <h1> Hello World! 🌏 </h1>
<br>
 <p>By Alejandro, Sandra y Rodrigo</p>
  </div>
`

setupCounter(document.querySelector('#counter'))
