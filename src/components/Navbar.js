import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
            <a class="navbar-brand" href="#">Og<span class='text-light'>AGRO</span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">About</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                        Our Products
                        </a>
                        <div class="dropdown-menu">
                        <a class="dropdown-item text-info" href="#"><center>Bitter Colar</center></a>
                        <a class="dropdown-item text-info" href="#"><center>Yellow Peppe</center></a>
                        <a class="dropdown-item text-info" href="#"><center>Melon seed</center></a>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Contact Us</a>
                    </li>                
                </ul>
            </div>
        </nav>
    </div>
  )
}
