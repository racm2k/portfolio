import React, { useState, useEffect } from "react";

function Clock() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <div className="container">
      <p className="date">{dateState.toDateString()}</p>
      <div className="time">
        <p id="hours">{(dateState.getHours() <10?'0':'') + dateState.getHours()}</p>
        <p id="minutes">{(dateState.getMinutes() < 10 ? '0':'') + dateState.getMinutes()}</p>
        <p id="seconds">{(dateState.getSeconds() < 10 ? '0':'') + dateState.getSeconds()}</p>
      </div>
    </div>
  );
}

export default Clock;
