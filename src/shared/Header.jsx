function Header() {
    return (
    
    <header className="navbar-header">
        
      {/* <!---------------------------------------- Nav Bar -------------------------------------------------------------> */}
      <nav className="navbar-container">
        {/* <!---------------------------------------Logo ----------------------------------------------------------------> */}
        <div className="logo-container">
          <a href="index.html">
            <img
            className="navbar-logo"
              src="public/images/CodeSquad-Comics-logo.jpg"
              alt="CodeSquad comic logo"
            />
          </a>
        </div>
        {/* <!--------------------------------------------- HAMBURGER ----------------------------------------------------> */}
        <div>
          <i className="fa-solid fa-bars fa-2x"></i>
        </div>
        {/* <!--------------------------------------------Links Container--------------------------------------------------> */}
        <div>
          <ul className="navbar-list">
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">LOGIN</a></li>
            
          </ul>
        </div>
      </nav>
      {/* <!--------------------------------------------End of Nav Bar--------------------------------------------------------> */}
    </header>
    )
  }

  export default Header;