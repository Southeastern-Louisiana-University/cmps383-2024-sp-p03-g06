import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function DatePickerCalendar() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  const handleCheckInChange = (date: Date | null) => {
    setCheckIn(date);
  };

  const handleCheckOutChange = (date: Date | null) => {
    setCheckOut(date);
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="checkIn" className="form-label">
          Check-in Date:
        </label>
        <DatePicker
          id="checkIn"
          selected={checkIn}
          onChange={handleCheckInChange}
          dateFormat="MM/dd/yyyy"
          minDate={new Date()}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="checkOut" className="form-label">
          Check-out Date:
        </label>
        <DatePicker
          id="checkOut"
          selected={checkOut}
          onChange={handleCheckOutChange}
          dateFormat="MM/dd/yyyy"
          minDate={checkIn || new Date()}
          className="form-control"
          required
        />
      </div>
    </div>
  );
}
