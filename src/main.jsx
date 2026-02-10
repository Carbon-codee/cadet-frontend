import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './context/AuthContext'; // AuthProvider'ı import et
import 'katex/dist/katex.min.css'; // LaTeX styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* AuthProvider ile tüm App'i sar */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);