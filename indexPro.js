import React from 'react';
import { createRoot } from 'react-dom/client';
import AppPro from './AppPro';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppPro />
  </React.StrictMode>
);
