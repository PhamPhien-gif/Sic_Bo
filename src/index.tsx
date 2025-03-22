import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./screens/Home";
import { AboutUs } from "./screens/AboutUs";
import { Project } from "./screens/Project";
import { Timeline } from "./screens/Timeline";
import { ContactUs } from "./screens/ContactUs";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/project" element={<Project />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  </StrictMode>
);