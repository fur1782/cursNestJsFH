import { Manager, Socket } from "socket.io-client";

let socket : Socket;

export const connecttoServer = (token : string) => {
    // http://localhost:3000/socket.io/socket.io.js

    const manager = new Manager("http://localhost:3000/socket.io/socket.io.js", {
        extraHeaders: {
            authentication: token,
        },
    });

    socket?.removeAllListeners();
    socket = manager.socket("/");

    addListeners();
}

const addListeners = () => {
    const serverStatusLabel = document.querySelector("#server-status")!;
    const clientsUl = document.querySelector("#clients-ul")!;
    const messagesUl = document.querySelector("#messages-ul")!;
    const messageForm = document.querySelector<HTMLFormElement>("#message-form")!;
    const messageInput = document.querySelector<HTMLInputElement>("#message-input")!;

    socket.on("connect", () => {
        serverStatusLabel.innerHTML = "Online";
    });

    socket.on("connect", () => {
        serverStatusLabel.innerHTML = "Online";
    });

    socket.on("clients-updated", (clients: string[]) => {
        console.log(clients);
        let clientsHtml = "";
        clients.forEach(clientId => {
            clientsHtml += `<li>${clientId}</li>`;
        });
        clientsUl.innerHTML = clientsHtml;
    })

    socket.on("message-from-server", (payload: { fullName: string, message: string }) => {
        
        const newMessage = `
            <li>
                <strong>${payload.fullName}</strong>
                <span>${payload.message}</span>
            </li>
        `
        const newLi = document.createElement("li");
        newLi.innerHTML = newMessage;
        messagesUl.appendChild(newLi);
    });

    messageForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (messageInput.value.trim().length <= 0) return;

        socket.emit("message-from-client", 
            {   
                id: "jo", 
                message: messageInput.value, 
            });
        messageInput.value = "";
    });
}