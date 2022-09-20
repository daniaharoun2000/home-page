import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from './About';

import "./index.scss"

import { Layout } from "./components";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />

        </Routes>
      </Layout>
    </div>
  );
}

export default App;


