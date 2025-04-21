// Updaimpte the component params to recieve deconstructured props
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // Build login func to handle submission
  const handleLogin = (e) => {
    let url =
      "https://course-project-codesquad-comics-server.onrender.com/login/local";
    // prevent default behavior
    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    fetch(url, { method: "POST", body: JSON.stringify(body) })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success message:", result);
        navigate("/admin")
        localStorage.setItem("user", JSON.stringify(result));
      })
      .catch((error) => console.log(error.message));

    // print out each submission
    console.log("Login email submitted:", e.target.email.value);
    console.log("Login password submitted:", e.target.password.value);
  };

  return (
    <main>
      <div className="home-collection-container">
        <h1 className="home-blerb-title">LOGIN</h1>
        <form onSubmit={handleLogin} className="login-form">
          {/* <!--Email--> */}

          <div>
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="email"
              required
            />
          </div>
          <br />
          {/* <!--Password--> */}
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              className="password"
              required
            />
          </div>

          {/* <!--Submit--> */}
          <div>
            <input type="submit" name="submitbutton" className="btn" />
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
