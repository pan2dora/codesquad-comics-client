import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import About from "./components/About.jsx";
import Admin from "./components/Admin.jsx";
import Create from "./components/Create.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Update from "./components/Update.jsx";
import Footer from "./shared/Footer.jsx";
import Header from "./shared/Header.jsx";

function App() {
  // Import useState and create a new state for a user. Remember the setter function.
  const [user, setUser] = useState("Test");
// Change to empty object
  console.log("In App", user)
  

  // const updateUser = (e) => {
  //   setUser(e.target.value);

  //   setUser(prevUser => prevUser.target.value)
  // };

  console.log("User", user);
  return (
    <>
      <Header user={user} setUser={setUser} />
      <About />
      <Admin />
      <Create />
      <Home />
      <Login user={user} setUser={setUser} />
      <Signup user={user} setUser={setUser} />
      <Update />
      <Footer />
    </>
  );
}

export default App;
