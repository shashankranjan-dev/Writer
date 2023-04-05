import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router-dom";

import {
  HomePage,
  AboutPage,
  ContactPage,
  WritePage,
  ArticlePage,
  PhotoPage,
  PoemPage,
  MainPage,
  FindPage,
} from "./pages/index";

function App() {
  return (
    <div className="App bg-stone-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/photo" element={<PhotoPage />} />
        <Route path="/poem" element={<PoemPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/find" element={<FindPage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
