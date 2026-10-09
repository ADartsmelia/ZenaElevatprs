import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { ThemeProvider } from "./lib/theme"
import { LangProvider, storedLang, type Lang } from "./i18n"
import Layout from "./components/layout/Layout"
import ElevatorIntro from "./components/intro/ElevatorIntro"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import Services from "./pages/Services"
import ZCare from "./pages/ZCare"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Privacy from "./pages/Privacy"
import NotFound from "./pages/NotFound"

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:slug" element={<ProductDetail />} />
        <Route path="services" element={<Services />} />
        <Route path="z-care" element={<ZCare />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

/** First visit from a Georgian browser (or a saved choice) lands on the Georgian site. */
function prefersGeorgian(): boolean {
  const saved = storedLang()
  if (saved) return saved === "ka"
  return typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("ka")
}

function LangShell({ lang }: { lang: Lang }) {
  const { pathname } = useLocation()

  // Decide before rendering anything so the intro never starts in the wrong language.
  if (lang === "en" && pathname === "/" && prefersGeorgian()) {
    return <Navigate to="/ka" replace />
  }

  return (
    <LangProvider lang={lang}>
      <ElevatorIntro />
      <AppRoutes />
    </LangProvider>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/ka/*" element={<LangShell lang="ka" />} />
        <Route path="/*" element={<LangShell lang="en" />} />
      </Routes>
    </ThemeProvider>
  )
}
