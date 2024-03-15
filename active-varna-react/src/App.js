// import logo from "./logo.svg";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

// import { Route, Routes } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      {/* <AuthProvider> */}
      <Header />
      <main></main>
      <Footer />
      {/* </AuthProvider> */}
    </>
  );
}

export default App;
