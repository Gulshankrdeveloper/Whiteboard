import { BrowserRouter, Routes, Route } from "react-router";
import Test from "./pages/Test";
import Realtime from "./pages/Realtime";
import Collab from "./pages/Collab";
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/realtime/:roomId" element={<Realtime />} />
      <Route path="/collab" element={<Collab />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
