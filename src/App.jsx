import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./Components/config/firebase";
function App() {
  const [userName, setUserName] = useState("");
  const [displayedValue, setDisplayedValue] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignIn = async () => {
    try {
      const results = await signInWithPopup(auth, googleProvider);

      const email = results?.user?.email;
      const profilePic = results?.user?.photoURL;

      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);

      setAuthenticated(true);
      setDisplayedValue(userName);
      setUserName("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Login
                userName={userName}
                setUserName={setUserName}
                setDisplayedValue={setDisplayedValue}
                handleSignIn={handleSignIn}
                authenticated={authenticated}
              />
            }
          />
          <Route
            path="/Home"
            element={
              <Home
                displayedValue={displayedValue}
                setDisplayedValue={setDisplayedValue}
                setAuthenticated={setAuthenticated}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
