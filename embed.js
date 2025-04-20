// Create a container for the widget
const container = document.createElement('div');
container.id = 'chatbot-widget-container';
document.body.appendChild(container);

// Load CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://wali-dt.github.io/chatbot-widget/style.css';
document.head.appendChild(link);

// Load HTML
fetch('https://wali-dt.github.io/chatbot-widget/widget.html')
  .then(res => res.text())
  .then(html => {
    container.innerHTML = html;

    // Load JS
    const script = document.createElement('script');
    script.src = 'https://wali-dt.github.io/chatbot-widget/script.js';
    document.body.appendChild(script);
  });
