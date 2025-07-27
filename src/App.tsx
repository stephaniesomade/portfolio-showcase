// src/App.tsx
import { Routes, Route } from "react-router-dom";

import Navbar from './components/NavBar'

import Home from "./pages/Home";
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Testimonials from "./pages/Testimonials";
import AboutMe from "./pages/AboutMe";
import WeatherApp from './pages/projects/WeatherApp';
import TaskManager from './pages/projects/TaskManager';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/weather-app" element={<WeatherApp />} />
        <Route path="/projects/task-manager" element={<TaskManager />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
