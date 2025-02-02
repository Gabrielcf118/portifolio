import { Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/Home";
import HeaderLayout from "./Layout/HeaderLayout";
import ExperiencesPage from "./Pages/Experiences";
import ProjectsPage from "./Pages/Projects";
import ContactPage from "./Pages/Contact";

export function Router() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route element={<HeaderLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/experiencias" element={<ExperiencesPage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
