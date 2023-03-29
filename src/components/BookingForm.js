import { useState } from "react";
const availableTimeArray = [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
]
const occasionsArr = ['None', 'Birthday', 'Anniversary']

function BookingForm() {
  const initDate = new Date();
  initDate.setDate(initDate.getDate() + 1);
  const YYYY = initDate.getFullYear();
  const MM = initDate.getMonth() < 10 ? "0" + (initDate.getMonth() + 1) : initDate.getMonth() + 1;
  const DD = initDate.getDate() < 10 ? "0" + initDate.getDate() : initDate.getDate();
  const availableTimeOpts = availableTimeArray.map((opt, idx) => {
    return <option key={idx} value={opt}>{opt}</option>;
  });
  const occasionsOpts = occasionsArr.map((opt, idx) => {
    return <option key={idx} value={opt}>{opt}</option>;
  });

  const [chooseDate, setChooseDate] = useState(YYYY + "-" + MM + "-" + DD);
  const [availableTime, setAvailableTime] = useState("17:00");
  const [guestsNum, setGuestsNum] = useState("1");
  const [occasion, setOccasion] = useState("None");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(chooseDate, availableTime, guestsNum, occasion);
  };

  return (
    <div className="booking-form-section">
      <div className="container">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              value={chooseDate}
              onChange={(e) => setChooseDate(e.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              value={availableTime}
              onChange={(e) => setAvailableTime(e.target.value)}
            >
              {availableTimeOpts}
            </select>
          </div>
          <div className="row">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number" placeholder="1" min="1" max="10" id="guests"
              value={guestsNum}
              onChange={(e) => setGuestsNum(e.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              {occasionsOpts}
            </select>
          </div>
          <input className="btn" type="submit" value="Make Your reservation" />
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
