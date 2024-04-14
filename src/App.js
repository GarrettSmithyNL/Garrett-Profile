import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import BigTiles from "./components/BigTiles";
import Footer from "./components/Footer";
import AboutNavBar from "./components/AboutNavBar";
import About from "./components/About";
import AppPage from "./components/AppPage";
import AppNav from "./components/AppNav";

// This is the main app function that mostly handles the routing of
// the page
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <BigTiles />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <AboutNavBar />
                <About />
              </>
            }
          />
          <Route
            path="/hangman"
            element={
              <>
                <AppNav />
                <AppPage hangman={true} />
              </>
            }
          />
          <Route
            path="/tasktracker"
            element={
              <>
                <AppNav />
                <AppPage tasktracker={true} />
              </>
            }
          />
          <Route
            path="/bitcoin"
            element={
              <>
                <AppNav />
                <AppPage bitcoin={true} />
              </>
            }
          />
          <Route
            path="/construction"
            element={
              <>
                <AppNav />
                <AppPage construction={true} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
