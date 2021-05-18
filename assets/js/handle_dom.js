let chatHistory = document.getElementById("chat__history");


// handle input send message
let inpSendMessage = document.getElementById("txtMessage");

inpSendMessage.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleEventSend();
    }

})

function handleEventSend() {
    let message = inpSendMessage.innerText
    inpSendMessage.innerText = ''
    chatHistory.innerHTML += createSendMessage(message)
    scrolTopToBottom();

    // handle send data
}