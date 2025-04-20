// embed.js
(function () {
  const container = document.createElement('div');
  container.id = 'chatbot-widget-container';
  document.body.appendChild(container);

  // Load CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://wali-dt.github.io/chatbot/style.css'; // Update to your actual GitHub Pages CSS URL
  document.head.appendChild(link);

  // Load HTML
  fetch('https://wali-dt.github.io/chatbot/widget.html') // Update to your GitHub Pages HTML URL
    .then(res => res.text())
    .then(html => {
      container.innerHTML = html;

      // Load marked.js
      const marked = document.createElement('script');
      marked.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
      document.body.appendChild(marked);

      // Load main script
      const script = document.createElement('script');
      script.src = 'https://wali-dt.github.io/chatbot/script.js'; // Update to your GitHub Pages JS URL
      document.body.appendChild(script);
    });
})();
