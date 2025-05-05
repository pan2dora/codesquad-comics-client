// Update the component params to cieve deconstructured props
import { Link, useNavigate } from "react-router-dom";


function Header({ user, setUser }) {
  const navigate = useNavigate();
  let url =
    "https://course-project-codesquad-comics-server.onrender.com/logout";
  const handleLogout = (e) => {
    e.preventDefault();
    fetch(url, { method: "POST" })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result.success.message);
        setUser({});
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error:", error.message);
        navigate("/Linkdmin");
      });
  };
  return (
    <header className="navbar-header">

        <div>
          {/* <!-- Font Awesome Script --> */}
          <script
            src="https://kit.fontawesome.com/0cba11103d.js"
            crossorigin="anonymous"
          ></script>
          {/* <!-- Google Fonts Script --> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
            rel="stylesheet"
          />
          {/* <!-- End of Google Font Script --> */}
        </div>


      {/* <!---------------------------------------- Nav Bar -------------------------------------------------------------> */}
      <nav className="navbar-container">
        {/* <!---------------------------------------Logo ----------------------------------------------------------------> */}
        <div className="logo-container">
          <Link href="index.html">
            <img
              className="navbar-logo"
              src="public/images/CodeSquad-Comics-logo.jpg"
              alt="CodeSquad comic logo"
            />
          </Link>
        </div>


        {/* <!--------------------------------------------- HAMBURGER ----------------------------------------------------> */}
        <div>
          <i className="fa-solid fa-bars fa-2x"></i>
        </div>
        {/* <!--------------------------------------------Links Container--------------------------------------------------> */}
        <div>
          <ul className="navbar-list">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            {user.username ? (
              <>
                <li>
                  <Link to="/admin">ADMIN</Link>
                </li>
                <li>
                  <a href="#" onClick={handleLogout}>
                    LOGOUT
                  </a>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
      {/* <!--------------------------------------------End of Nav Bar--------------------------------------------------------> */}
    </header>
  );
}

export default Header;
