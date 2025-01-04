import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import './index.css'

function Layout() {
  return (
    <div id="layout">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Layout