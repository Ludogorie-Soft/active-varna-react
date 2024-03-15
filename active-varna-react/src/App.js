// import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

// import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Header />
      <main>{/* <Routes></Routes> */}</main>
      <Footer />
    </AuthProvider>
  );
}

export default App;
