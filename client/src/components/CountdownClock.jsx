// CountdownClock.js

import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

function CountdownClock(props) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // useEffect(() => {
  //   const calculateTimeLeft = () => {
  //     const start = new Date(startDate);
  //     const end = new Date(endDate);
  //     const currentTime = new Date();

  //     // If start date has not arrived, set timeLeft to zero
  //     if (currentTime < start) {
  //       setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
  //       return;
  //     }

  //     // If end date has passed, set timeLeft to zero
  //     if (currentTime >= end) {
  //       setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
  //       return;
  //     }

  //     const diffInSeconds = Math.floor((end - currentTime) / 1000);

  //     const hours = Math.floor(diffInSeconds / 3600);
  //     const minutes = Math.floor((diffInSeconds % 3600) / 60);
  //     const seconds = diffInSeconds % 60;

  //     setTimeLeft({ hours, minutes, seconds });
  //   };

  //   const timerID = setInterval(calculateTimeLeft, 1000);

  //   return () => clearInterval(timerID);
  // }, [startDate, endDate]);

  useEffect(() => {
    if (props?.timeLeft != null) setTimeLeft(props?.timeLeft);
  }, [props].timeLeft);

  return (
    <>
      <div>
        <p>{`${timeLeft.hours} : ${timeLeft.minutes} : ${timeLeft.seconds}`}</p>
      </div>
    </>
  );
}

// CountdownClock.propTypes = {
//   startDate: PropTypes.instanceOf(Date).isRequired,
//   endDate: PropTypes.instanceOf(Date).isRequired,
// };

export default CountdownClock;
