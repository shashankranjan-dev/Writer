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
  BrowsePage,
  WritingPage,
  PublicationPage,
} from "./pages/index";
import ReadArticle from "./pages/Article/ReadArticle";
import ReadPoem from "./pages/Poem/ReadPoem";
import BrowseArticle from "./pages/Browse/BrowseArticle";

function App() {
  return (
    <div className="App bg-stone-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/articles/:slug" element={<ReadArticle />} />
        <Route path="/photo" element={<PhotoPage />} />

        <Route path="/poem" element={<PoemPage />} />
        <Route path="/poems/:slug" element={<ReadPoem />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/find" element={<FindPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/browse/:slug" element={<BrowseArticle />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/publication" element={<PublicationPage />} />
      </Routes>
      <Footer className="bg-stone-900" />
    </div>
  );
}

export default App;
