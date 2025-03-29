function Signup() {
    return (
      <main>
        <div className="home-collection-container">
    <h1 className="home-blerb-title">LOGIN</h1>
    <form className="login-form">
      {/* First Name */}
      <div>
        <label htmlFor="name">First Name:</label>
        <input 
          type="firstname"
          placeholder="first Name"
          name="name"
          id="name"
          className="firstName"
          required
        />
      </div>
      {/* Last Name */}
      <div>
        <label htmlFor="name">Last Name:</label>
        <input 
          type="lastname"
          placeholder="last Name"
          name="lastname"
          id="lastname"
          className="lasttName"
          required
        />
      </div>
    
      {/* <!--Email--> */}
      <div className="login-form-text">
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

  export default Signup;