import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FirstPerson from "./components/FirstPerson";
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index path='first-person' element={<FirstPerson />} />
        </Route>
      </Routes>
    </BrowserRouter>
);
