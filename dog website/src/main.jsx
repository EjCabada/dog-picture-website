import { createRoot } from 'react-dom/client'; 
import './index.css';
import Layout from './Layout.jsx'
import  Home  from "./Home.jsx";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/dog-picture-website" element={<Layout />}>
      <Route path='' element={<Home />} /> 
    </Route>
  )
);

const root = createRoot(document.getElementById('root')); 
root.render(
    <RouterProvider router={router} />
);
