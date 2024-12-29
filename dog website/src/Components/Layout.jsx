import React from 'react'
import './components.css'
import '../index.css'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

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