import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Homepage />}
            />
            <Route
              path="/booking"
              element={<BookingPage />}
            />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
