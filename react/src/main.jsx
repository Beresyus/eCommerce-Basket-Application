// React
import React from 'react'
import ReactDOM from 'react-dom/client'
// Page
import App from './App.jsx'
// Contexts
import { ContextProvider } from "./contexts/ContextProvider.jsx";

// CSS
import "./assets/css/bootstrap.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/animate.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/themify-icons.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./assets/css/icofont.css";
import "./assets/css/meanmenu.min.css";
import "./assets/css/bundle.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)
