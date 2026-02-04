
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Global error handler to help catch silent failures in production
window.onerror = (message, source, lineno, colno, error) => {
  console.error("Global Error Caught:", { message, source, lineno, colno, error });
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (err) {
  console.error("Mounting Error:", err);
  rootElement.innerHTML = `<div style="padding: 20px; color: red; font-family: sans-serif;">
    <h1>Application Error</h1>
    <p>The application failed to start. Check the browser console for more details.</p>
  </div>`;
}
