import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from './pages/about/About';
import AddArticle from './pages/addarticle/AddArticle';
import EditArticle from './pages/editarticle/EditArticle';
import Article from './pages/article/Article'

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-article" element={<AddArticle />} />
          <Route path="/edit-article/:articleId" element={<EditArticle />} />
          <Route path="/article/:articleId" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
