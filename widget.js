<!-- widget.html -->
<div class="chat-widget-button" onclick="toggleChat()">
  <img src="logo3.jpg" alt="Chat Icon" id="chatIcon" />
  <div class="chat-widget-label">Ask me</div>
</div>

<div class="chat-container" id="chatBox">
  <div class="chat-header">
    <img src="logo3.jpg" alt="Logo" class="chat-logo" />
    <span>Chatbot</span>
  </div>
  <div class="chat-messages" id="chatMessages">
    <div class="message bot">Hi there! How can I assist you today?</div>
  </div>
  <div class="chat-input">
    <textarea id="messageInput" placeholder="Type a message..."></textarea>
    <button onclick="sendMessage()">➤</button>
  </div>
</div>
