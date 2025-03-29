function Login() {
    return (
     <main>
      <div className="home-collection-container">
    <h1 className="home-blerb-title">LOGIN</h1>
    <form className="login-form">
      {/* <!--Email--> */}
  
      <div>
        <label htmlFor="email">Email address:</label>
        <input type="email" placeholder="Email" id="email" className="email" required />
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
      <input type="submit" name="submitbutton" className="btn" /></div>
    </form>
  </div>


     </main>
    )
  }

  export default Login;