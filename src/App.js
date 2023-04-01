import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchAPI, submitAPI } from './utils/api';
import { useReducer } from "react";
import './App.css';
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";

function App() {
  const todayDate = new Date();
  const initializeTimes = fetchAPI(todayDate);
  const updateTimes = (state, action) => {
    return fetchAPI(action.selectedDate);
  }

  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes);

  function useSubmitForm(formData) {
    const submitResult = submitAPI(formData);

    if (submitResult) {
      window.location.href = '/confirmed-booking';
    }
  }

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
              element={<BookingPage
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                submitForm={useSubmitForm}
              />}
            />
            <Route
              path="/confirmed-booking"
              element={<ConfirmedBooking />}
            />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
