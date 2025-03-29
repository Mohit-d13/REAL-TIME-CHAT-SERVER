document.addEventListener('DOMContentLoaded', () => {
    const roomSlug = JSON.parse(document.getElementById('json-roomname').textContent);
    const username = JSON.parse(document.getElementById('json-username').textContent);
    
    // Form and input elements
    const chatForm = document.getElementById('chat-form');
    const chatMessageInput = document.getElementById('chat-message-input');
    const chatMessageSubmit = document.getElementById('chat-message-submit');
    const chatMessages = document.getElementById('chat-messages');
    const imageUpload = document.getElementById('image-upload');
    const fileUpload = document.getElementById('file-upload');

    // WebSocket connection setup
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const chatSocket = new WebSocket(
        protocol
        + window.location.host
        + '/ws/'
        + roomSlug
        + '/'
    );

    // WebSocket event handlers
    chatSocket.onopen = function(e) {
        console.log('WebSocket connection established');
    };

    chatSocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        // Handle incoming messages
        displayMessageOnFrontend(data);
    };

    chatSocket.onclose = function(e) {
        console.error('Chat socket closed unexpectedly');
    };

    // Send message function
    function sendMessageToBackend(e) {
        e.preventDefault(); // Prevent default form submission

        // Check if there's a message or file
        const message = chatMessageInput.value.trim();
        const image = imageUpload.files[0];
        const file = fileUpload.files[0];

        // Validation
        if (!message && !image && !file) {
            alert('Please enter a message or select a file');
            return;
        }

        // Determine message type
        let messageType = 'text';
        if (image) messageType = 'image';
        if (file) messageType = 'file';

        // Prepare message data
        const messageData = {
            'message': message,
            'username': username,
            'roomslug': roomSlug,
            'message_type': messageType,
            'has_file': !!(image || file)
        };

        // Send message via WebSocket
        chatSocket.send(JSON.stringify(messageData));

        // Reset form
        chatMessageInput.value = '';
        imageUpload.value = '';
        fileUpload.value = '';
    }

    // Display message to chat window
    function displayMessageOnFrontend(data) {
        const messageBox = document.querySelector('.message-box');
        const messageDiv = document.createElement('div');
        
        // Determine if the message is from the current user
        const isCurrentUser = data.username === username;
        messageDiv.classList.add(isCurrentUser ? 'send' : 'receive',
            'mb-4',
            'd-flex',
            'align-items-start'
        );

        // Message HTML template (simplified)
        messageDiv.innerHTML = `
            <div class="${isCurrentUser ? 'me-2' : 'ms-2'}">
                <img src="${data.picture}" class="rounded-circle" alt="${data.username}" width="40" height="40">
            </div>
            <div class="flex-shrink-1 bg-light rounded py-2 px-3">
                <div class="fw-bold mb-1">${isCurrentUser ? 'You' : data.username}</div>
                ${data.has_file ? 
                    '<div class="text-warning">Attached file</div>' : 
                    `<p>${data.message}</p>`
                }
                <div class="text-muted small text-nowrap mt-2">${new Date().toLocaleString()}</div>
            </div>
        `;

        messageBox.appendChild(messageDiv);
        
        // Scroll to bottom of messages
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Activate Submit event 
    chatForm.addEventListener('submit', sendMessageToBackend);
    chatMessageSubmit.addEventListener('click', sendMessageToBackend);

    // Add a change event listener to both image and file upload inputs to preview the selected file
    [imageUpload, fileUpload].forEach(input => {
        input.addEventListener('change', function() {
            if (this.files.length > 0) {
                const fileType = this.id === 'image-upload' ? 'Image' : 'File';
                chatMessageInput.value = `Uploading: ${this.files[0].name} (${fileType})`;
            }
        });
    });
});