// IMPORTS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DetailPage from "./pages/DetailPage";
import ParticipantDetailPage from "./pages/ParticipantDetailPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path={`/detail/:id`} element={<DetailPage />} />
          <Route
            path={`/detail/:id/info/:idParticipant`}
            element={<ParticipantDetailPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
