import React, { useState } from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";

const calculateEndDate = (startDate, time, timeFormat) => {
  return moment(startDate)
    .add(time, timeFormat)
    .format("DD MMMM YYYY");
};

const Date = () => {
  const [startDate, setStartDate] = useState("");
  const [timeToAdd, settimeToAdd] = useState(4);
  const [timeFormat, setTimeFormat] = useState("days");

  return (
    <div>
      <h3>Select a day to start</h3>
      <DatePicker
        showPopperArrow={false}
        selected={startDate}
        onChange={date => setStartDate(date)}
        inline
      />
      {startDate && (
        <>
          <h2>How long you want that to be </h2>
          <label>
            <input
              type="number"
              value={timeToAdd}
              onChange={e => settimeToAdd(e.target.value)}
            />
            <select onChange={e => setTimeFormat(e.target.value)}>
              <option selected={timeFormat === "days"} value="days">
                days
              </option>
              <option selected={timeFormat === "weeks"} value="weeks">
                weeks
              </option>
            </select>
          </label>
          <h4>
            Your end date will be{" "}
            {calculateEndDate(startDate, timeToAdd, timeFormat)}
          </h4>

          <div>
            What are your goals
            <div>
              <input
                type="text"
                value={timeToAdd}
                onChange={e => settimeToAdd(e.target.value)}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Mind friend</h1>
      <h2>Track your changes</h2>
      <div>
        <p>Setup your calendar</p>
        <Date />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
