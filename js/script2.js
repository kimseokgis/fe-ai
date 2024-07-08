// Function to navigate to a specific link
function navigateTo(link) {
    window.location.href = link;
}

// Sidebar toggle functionality
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        main.style.marginLeft = '0';
    } else {
        sidebar.style.left = '0px';
        main.style.marginLeft = '250px';
    }
}

// Adding functionality for send button
document.getElementById("send-btn").addEventListener("click", sendMessage);

function sendMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value.trim();
    if (message) {
        addMessageToChat("outgoing", message);
        input.value = "";
        // You can add your code here to send the message to the server
    }
}

// Adding message to chat container
function addMessageToChat(type, message) {
    const chatContainer = document.querySelector(".chat-container");
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat", type);

    const chatDetailsDiv = document.createElement("div");
    chatDetailsDiv.classList.add("chat-details");

    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = message;

    chatDetailsDiv.appendChild(messageParagraph);
    chatDiv.appendChild(chatDetailsDiv);
    chatContainer.appendChild(chatDiv);

    chatContainer.scrollTop = chatContainer.scrollHeight;
}
