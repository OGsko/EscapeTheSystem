import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import RoomPage from "./components/RoomPage/RoomPage";
import VictoryPage from "./components/VictoryPage/VictoryPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rooms/:roomPath" element={<RoomPage />} />
      <Route path="/victory" element={<VictoryPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
