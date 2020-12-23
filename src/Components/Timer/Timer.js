import React, { useState, useEffect} from 'react';
import moment from 'moment';

function Timer ({deadline, isDone, style, index}) {
  let [remain, setTime] = useState([0, 0, 0]);
  deadline = moment(deadline, 'DD-MM-YYYY HH:mm:ss').unix();
  // подать endtime и функцию, которая будет триггерить когда время пройдет

  useEffect(() => {
    const currentTime = moment().unix();
    let diffTime = deadline - currentTime;
    let duration = moment.duration(diffTime * 1000, 'milliseconds');
    const interval = 1000;

    if (diffTime > 0) {
      const remainTime = setInterval(() => {
        --diffTime;
        let countedRemain = [];
        countedRemain[0] = moment.duration(duration).hours();
        countedRemain[1] = moment.duration(duration).minutes();
        countedRemain[2] = moment.duration(duration).seconds();
        setTime(remain => remain = countedRemain);
      }, interval);
      return () => clearInterval(remainTime);
    } else if (diffTime === 0) {
      return;
    }
  });

  return (
    (!isDone 
      ? <p className={style}>{remain[0]}h {remain[1]}m {remain[2]}s</p> 
      : <p className={style}>{remain[0] = 0}h {remain[1] = 0}m {remain[2] = 0}s</p>
    )
  );
}

export default Timer;