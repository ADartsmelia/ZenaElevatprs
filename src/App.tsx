import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./lib/theme"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
