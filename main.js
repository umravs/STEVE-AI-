document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

    // Add initial greeting
    addMessage("Hello! I'm Steve AI. How can I help you today?", 'ai');

    // Send message function
    function sendMessage() {
        const message = userInput.value.trim();
        if (message !== '') {
            addMessage(message, 'user');
            // Simulate AI response
            setTimeout(() => {
                generateResponse(message);
            }, 1000);
            userInput.value = '';
        }
    }

    // Add message to chat
    function addMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${type}-message`);
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Simple response generation (placeholder)
    function generateResponse(userMessage) {
        const responses = [
            "That's interesting! Tell me more.",
            "I understand. How can I help you with that?",
            "Let me think about that for a moment...",
            "I'm processing your request.",
            "Could you please elaborate on that?"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addMessage(randomResponse, 'ai');
    }

    // Event listeners
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
