import { connecttoServer } from './connection-client'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Websocket</h1>
    <span id="server-status">Offline</span>
    <br />

    <input placeholder="Type the JWT..." id="jwt-input" type="text"/>
    <button id="connect-btn">Connect</button>

    <ul id="clients-ul"></ul>

    <form id="message-form">
      <input placeholder="Type a message..." id="message-input" type="text"/>
    </form>

    <h2>Messages</h2>
    <ul id="messages-ul"></ul>
  </div>
`

const connectBtn = document.querySelector<HTMLButtonElement>("#connect-btn")!;
const jwtInput = document.querySelector<HTMLInputElement>("#jwt-input")!;

connectBtn.addEventListener("click", () => {

  if (jwtInput.value.trim().length <= 0) {
    alert("Please enter a JWT");
    return;
  }



  connecttoServer(jwtInput.value.trim());
});
