import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';


const style = document.createElement('style');
style.innerHTML = `
  :root {
    --bg-color: #ffffff;
    --text-color: #111111;
    --card-bg: #f9f9f9;
    --accent-color: #ffcc00;
  }
  [data-theme="dark"] {
    --bg-color: #121212;
    --text-color: #f5f5f5;
    --card-bg: #1f1f1f;
    --accent-color: #ffcc00;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: all 0.3s ease;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
