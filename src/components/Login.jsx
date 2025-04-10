// Update the component params to recieve deconstructured props
function Login({ user, setUser }) {
  console.log("In login", user);
  // Build login func to handle submission
  const handleLogin = (e) => {
    // prevent default behavior
    e.preventDefault(console.log("Login submitted"));

    // print out each submission
    console.log("Email", document.getElementById("email").value);
    console.log("password", document.getElementById("password").value);
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
