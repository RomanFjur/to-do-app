import React from 'react';
import Timer from '../Timer/Timer';

const timer = new Timer();

function ToTimer (endTime) {
  console.log(endTime);
  const [timerState, setTimerState] = React.useState(endTime);
  console.log(timerState);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimerState(timer.countDown(endTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  console.log(timerState);
  return (
    <div>{timerState}</div>
  );
}

export default ToTimer;