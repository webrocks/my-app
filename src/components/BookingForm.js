import { useState } from "react";
const occasionsArr = ['None', 'Birthday', 'Anniversary'];

function BookingForm({availableTimes, setAvailableTimes, submitForm}) {
  const initDate = new Date();
  initDate.setDate(initDate.getDate());
  const YYYY = initDate.getFullYear();
  const MM = initDate.getMonth() < 10 ? "0" + (initDate.getMonth() + 1) : initDate.getMonth() + 1;
  const DD = initDate.getDate() < 10 ? "0" + initDate.getDate() : initDate.getDate();

  const availableTimesOpts = availableTimes.map((opt, idx) => {
    return <option key={idx} value={opt}>{opt}</option>;
  });
  const occasionsOpts = occasionsArr.map((opt, idx) => {
    return <option key={idx} value={opt}>{opt}</option>;
  });

  const minSelectDate = YYYY + "-" + MM + "-" + DD;
  const [usrName, setUsrName] = useState("");
  const [usrLastName, setUsrLastName] = useState("");
  const [time, setTime] = useState(availableTimes[0]);
  const [selectedDate, setSelectedDate] = useState(YYYY + "-" + MM + "-" + DD);
  const [guestsNum, setGuestsNum] = useState("1");
  const [occasion, setOccasion] = useState("None");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setAvailableTimes({ selectedDate: new Date(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {usrName, usrLastName, selectedDate, time, guestsNum, occasion};
    submitForm(formData);
  };

  return (
    <div className="booking-form-section">
      <div className="container">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="res-nme">Name <sup>*</sup></label>
            <input
              type="text"
              minLength="2"
              maxLength="150"
              required
              id="res-nme"
              value={usrName}
              onChange={(e) => setUsrName(e.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="res-lastnme">Last Name <sup>*</sup></label>
            <input
              type="text"
              minLength="2"
              maxLength="150"
              required
              id="res-lastnme"
              value={usrLastName}
              onChange={(e) => setUsrLastName(e.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              value={selectedDate}
              onChange={handleDateChange}
              min={minSelectDate}
            />
          </div>
          <div className="row">
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {availableTimesOpts}
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
