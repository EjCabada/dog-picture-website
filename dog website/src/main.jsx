import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css';
import Layout from '../src/Components/Layout.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from '../src/Components/Home.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> 
    </Route>
  )
);

const root = createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
