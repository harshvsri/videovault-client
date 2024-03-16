import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Videos from "./components/Videos";
import Player from "./components/Player";
import Upload from "./components/Upload";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} exact>
          <Route path="/" element={<Videos />} index />
          <Route path="upload" element={<Upload />} />
          <Route path="watch/:id" element={<Player />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
