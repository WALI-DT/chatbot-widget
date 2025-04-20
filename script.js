const chatBox = document.getElementById("chatBox");

function toggleChat() {
  chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
}

async function sendMessage() {
  const input = document.getElementById("messageInput");
  const text = input.value.trim();
  if (!text) return;

  const chatMessages = document.getElementById("chatMessages");
  chatMessages.innerHTML += `<div class="message user">${text}</div>`;
  input.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;

  const typingIndicator = document.createElement("div");
  typingIndicator.className = "message bot typing";
  typingIndicator.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;
  chatMessages.appendChild(typingIndicator);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  try {
    const res = await fetch("https://abdul-wali.app.n8n.cloud/webhook/ce41d0ab-44ae-4fd8-aeb6-a4a5f51467e8", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    });

    if (!res.ok) {
      throw new Error(`Server responded with status ${res.status}`);
    }

    const data = await res.json();
    typingIndicator.remove();

    const formattedReply = marked.parse(data.reply);
    chatMessages.innerHTML += `<div class="message bot">${formattedReply}</div>`;
    chatMessages.scrollTop = chatMessages.scrollHeight;

  } catch (error) {
    typingIndicator.remove();
    chatMessages.innerHTML += `<div class="message bot">⚠️ There was an error connecting to the server. (${error.message})</div>`;
    chatMessages.scrollTop = chatMessages.scrollHeight;
    console.error("Fetch error:", error);
  }
}

// Close chat if clicked outside
document.addEventListener("click", function (event) {
  const chatBox = document.getElementById("chatBox");
  const chatButton = document.querySelector(".chat-widget-button");
  if (
    chatBox.style.display === "flex" &&
    !chatBox.contains(event.target) &&
    !chatButton.contains(event.target)
  ) {
    chatBox.style.display = "none";
  }
});
