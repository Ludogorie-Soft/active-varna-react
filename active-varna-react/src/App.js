// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

// import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      {/* <AuthProvider> */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      {/* </AuthProvider> */}
    </>
  );
}

export default App;
