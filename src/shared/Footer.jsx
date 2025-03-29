function Footer() {
    return (
        // <!---------------------------------------------Start of Footer---------------------------------------------->
        <footer className="footer-container">
          {/* <!-------------------------------------------Visit Block------------------------------------------> */}
          <div>
            <h2>VISIT US</h2>
            <span>CodeSquad Comics</span> <br />
            <span>123 Dochester Avenue</span><br />
            <span>Boston Ma 02124</span>
          </div>
    
          {/* <!-- -------------------------------Start of footer-links block -------------------------------------------> */}
    
          <div className="footer-links">
            <h2>LINKS</h2>
            <a href="#">Home</a>
            <br />
            <a href="#">About</a>
            <br />
            <a href="#">Login</a>
          </div>
          {/* <!---------------------------------------------Follow Us-----------------------------------------------------> */}
          <div className="footer-links ">
            <h2>FOLLOW US</h2>
            <div className="footer-icons">
            <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
            <br />
            <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
            <br />
            <a href="#"><i className="fa-brands fa-square-twitter"></i></a>
          </div></div>
          {/* <!------------------------------------------End of Footer Links-------------------------------------------------> */}
    
          {/* <!------------------------------------------Footer Logo-----------------------------------------------> */}
          <div>
            <h2>A PRODUCT OF</h2>
            <a
              href="https://www.codesquad.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer-logo"
                src="public/images/CodeSquad-logo-b.png"
                alt="White and Red CodeSquad.org logo"
            /></a>
          </div>
        </footer>
     
    )
  }

  export default Footer;