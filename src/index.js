import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Person from "./components/Person";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index path='first-person' element={<Person name="Dmytro" person="first-person"/>} />
          <Route index path='second-person' element={<Person name="Dan" person="second-person"/>} />
        </Route>
      </Routes>
    </BrowserRouter>
);
