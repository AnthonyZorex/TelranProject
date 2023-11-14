import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {Provider} from "react-redux";
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 <BrowserRouter>
   <App />
  </BrowserRouter>
  </Provider>
 
);

// assets 
// -----> fonts ----> файлы для .otf или .ttf
// -----> images ----> изображение
// -----> styles ----> стили
          // -----> components
          // -----> pages ----> // .scss или .css файлы
          // другие .scss или .css файлы
// components
          // -----> Product папка где у Вас будут фругие маленькие компоненты которые относиться к этой странице
// pages
// -----> Home
          // -----> Home.jsx
          // -----> index.js
// -----> Products
          // -----> Products.jsx
          // -----> index.js
// -----> index.js откуда у нас инпортируються все Page компоненты
// App.js
// index.js