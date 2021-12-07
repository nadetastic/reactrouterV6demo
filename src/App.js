import { Routes, Route } from "react-router-dom"

import Home from "./Components/Home";
import Second from "./Components/Second";
import NotFound from "./Components/NotFound";
import Dynamic from "./Components/Dynamic";

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <Routes>
      <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Second />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dynamic/:id" element={<Dynamic /> } />

      </Routes>
    </div>
  );
}

export default App;



