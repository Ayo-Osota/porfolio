import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Shopify from "./pages/Shopify";
import Header from "./components/Header";

function App() {
  // window.addEventListener('scroll', () => {
  //   document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  // }, false);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shopify" element={<Shopify />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
