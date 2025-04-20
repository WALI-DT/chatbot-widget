// Create a container for the widget
const container = document.createElement('div');
container.id = 'chatbot_frontend-container';
document.body.appendChild(container);

// Load CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://wali-dt.github.io/chatbot_frontend/style.css';
document.head.appendChild(link);

// Load HTML
fetch('https://yourusername.github.io/chatbot_frontend/widget.html')
  .then(res => res.text())
  .then(html => {
    container.innerHTML = html;

    // Load JS
    const script = document.createElement('script');
    script.src = 'https://yourusername.github.io/chatbot_frontend/script.js';
    document.body.appendChild(script);
  });
