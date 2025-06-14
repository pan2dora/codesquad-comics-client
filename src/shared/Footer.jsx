


function Footer() {
    return (
      
        // <!---------------------------------------------Start of Footer---------------------------------------------->
        <footer className="footer-container">
          {/* <!-------------------------------------------Visit Block------------------------------------------> */}
          <div>
            <h3>VISIT US</h3>
            <span>CodeSquad Comics</span> <br />
            <span>123 Dochester Avenue</span><br />
            <span>Boston Ma 02124</span>
          </div>
    
          {/* <!-- -------------------------------Start of footer-links block -------------------------------------------> */}
    
          <div className="footer-links">
            <h3>LINKS</h3>
            <a href="#">Home</a>
            <br />
            <a href="#">About</a>
            <br />
            <a href="#">Login</a>
          </div>
          {/* <!---------------------------------------------Follow Us-----------------------------------------------------> */}
          <div className="footer-links ">
            <h3>FOLLOW US</h3>
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
            <h3>A PRODUCT OF</h3>
            <a
              href="https://www.codesquad.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer-logo"
                src="public/images/CodeSquad-logo.jpg"
                alt="White and Red CodeSquad.org logo"
            /></a>
          </div>
        </footer>
     
    )
  }

  export default Footer;