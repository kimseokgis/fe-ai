// Function to get the value of a cookie by name
function getCookie(name) {
    let cookieArr = document.cookie.split(";");

    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");

        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

// Function to send the message and get a response from the API
function sendMessage() {
    const inp = document.getElementById('chatInput').value;
    const url = `https://asia-southeast2-gis-project-401902.cloudfunctions.net/backend-ai/chatRegexp?key=${inp}`;

    document.getElementById('loading').classList.remove('hidden');

    axios.post(url, null, {
        headers: {
            'login': getCookie("user_login")
        }
    })
        .then(response => {
            let apiResponses = JSON.parse(localStorage.getItem('apiResponses')) || [];
            apiResponses.push({
                message: inp,
                response: response.data
            });
            localStorage.setItem('apiResponses', JSON.stringify(apiResponses));
            displayResponses();
            document.getElementById('chatInput').value = '';
        })
        .catch(error => {
            console.error('Error fetching data from API:', error);
        })
        .finally(() => {
            document.getElementById('loading').classList.add('hidden');
        });
}

// Function to display all responses from localStorage
function displayResponses() {
    const responseDisplay = document.getElementById('responseDisplay');
    const apiResponses = JSON.parse(localStorage.getItem('apiResponses')) || [];

    responseDisplay.innerHTML = '';
    apiResponses.forEach(item => {
        responseDisplay.innerHTML += `<div class="p-4 bg-gray-50 border rounded-lg mb-4">
                                        <div class="p-2 bg-white border rounded-lg">
                                            <p class="font-bold text-blue-500">Message:</p>
                                            <p>${item.message}</p>
                                        </div>
                                        <div class="p-2 bg-gray-100 border rounded-lg mt-2">
                                            <p class="font-bold text-green-500">Response:</p>
                                            <p>${item.response.message}</p>
                                            <p>${item.response.responses}</p>
                                        </div>
                                      </div>`;
    });
}

// Function to delete all responses from localStorage
function deleteResponses() {
    localStorage.removeItem('apiResponses');
    displayResponses();
}

window.onload = displayResponses;

const createChatElement = (content, className) => {
    // Create new div and apply chat, specified class and set html content of div
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat", className);
    chatDiv.innerHTML = content;
    return chatDiv; // Return the created chat div
}