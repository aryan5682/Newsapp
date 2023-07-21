import React, { Component } from 'react'
import {Link} from "react-router-dom"
   const NavBar=()=>{
    return (
      <div>
        <nav class="navbar fixed-top navbar-expand-lg bg-info">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">NewsApp</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active " aria-current="page" to="/">Hom</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="/">About</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select Category
          </Link>
          <ul class="dropdown-menu my-2 rounded-0">
            <li><Link class="dropdown-item " to="/business" style={{color:"#54B4D3"}}>Business</Link></li>
            <li><Link class="dropdown-item" to="/entertainment"  style={{color:"#54B4D3"}}>Entertainment</Link></li>
            <li><Link class="dropdown-item" to="/general"  style={{color:"#54B4D3"}}>General</Link></li>
            <li><Link class="dropdown-item" to="/health"  style={{color:"#54B4D3"}}>Health</Link></li>
            <li><Link class="dropdown-item" to="/science"  style={{color:"#54B4D3"}}>Science</Link></li>
            <li><Link class="dropdown-item" to="/sports"  style={{color:"#54B4D3"}}>Sports</Link></li>
            <li><Link class="dropdown-item" to="/technology"  style={{color:"#54B4D3"}}>Technology</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="/"></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
export default NavBar

