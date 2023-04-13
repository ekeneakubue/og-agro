import './navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light mynav fixed-top">
            <div className='brand-txt'>
                <img src="images/footer_Logo.jpg" alt="logo" className="navbarLogo" />                
            </div>            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end navs-txt" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to ='/'>                                                     
                            <a class="nav-link text-dark" href="#">Home</a>                                                                               
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link to ='/about'>
                            <a class="nav-link text-dark" href="#">About</a>
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link to ='/products'>
                            <a class="nav-link text-dark" href="#">Products</a>
                        </Link>
                    </li>                  

                    <li class="nav-item">
                        <Link to ='/contacts'>
                            <a class="nav-link text-dark" href="#">Contact Us</a>
                        </Link>
                    </li>                
                </ul>
            </div>
        </nav>
    </div>
  )
}
