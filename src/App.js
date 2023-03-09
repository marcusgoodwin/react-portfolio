import Layout from "./component/Layout/index";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Resume from "./component/Resume/index";
import About from "./component/About/index";
import Contact from "./component/Contact/index";
import Projects from "./component/Projects/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/react-portfolio" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="/react-portfolio/projects" element={<Projects />} />
          <Route path="/react-portfolio/contact" element={<Contact />} />
          <Route path="/react-portfolio/resume" element={<Resume />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
