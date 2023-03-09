import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import "./assets/fonts/SFMonoLight.ttf"
import "./assets/fonts/SFMonoMedium.ttf"
import "./assets/fonts/SFMonoBold.ttf"
import "./assets/fonts/CalibreRegular.ttf"
import "./assets/fonts/CalibreMedium.ttf"
import "./assets/fonts/CalibreBold.ttf"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

