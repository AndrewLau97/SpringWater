import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Homepage from "./Pages/Homepage";
import Menu from "./Pages/Menu";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./Components/PageWrapper";
import Takeaway from "./Pages/Takeaway";
import Buffet from "./Pages/Buffet";
import ALaCarte from "./Pages/ALaCarte";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Homepage />
                </PageWrapper>
              }
            />
            <Route
              path="/menu"
              element={
                <PageWrapper>
                  <Menu />
                </PageWrapper>
              }
            />
            <Route
              path="/buffet"
              element={
                <PageWrapper>
                  <Buffet />
                </PageWrapper>
              }
            />
            <Route
              path="/alacarte"
              element={
                <PageWrapper>
                  <ALaCarte />
                </PageWrapper>
              }
            />
              <Route
                path="/takeaway"
                element={
                  <PageWrapper>
                    <Takeaway />
                  </PageWrapper>
                }
              />
          </Routes>
        </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
