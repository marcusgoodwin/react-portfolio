import Layout from './component/Layout'
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home/index.js'
import About from './component/About/index.js'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
