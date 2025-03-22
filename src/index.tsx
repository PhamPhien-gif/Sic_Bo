import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import "./i18n";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";
import { HomePage } from "./pages/Home";
import { ProjectPage } from "./pages/Project";
import { TimelinePage } from "./pages/Timeline";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/Sic_Bo" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Sic_Bo/home" element={<HomePage />} />
          <Route path="/Sic_Bo/about" element={<AboutPage />} />
          <Route path="/Sic_Bo/project" element={<ProjectPage />} />
          <Route path="/Sic_Bo/timeline" element={<TimelinePage />} />
          <Route path="/Sic_Bo/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  </StrictMode>,
);