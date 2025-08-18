import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/'
import About from './pages/About'
import Error from './pages/Error'
import Layout from './components/Layout'

function Router() {
    return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="*" element={<Layout><Error /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router