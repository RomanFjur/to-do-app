import React, { useState, useEffect} from 'react';
import moment from 'moment';

function Timer ({deadline, timeRemain, isDone, style, setTimeInTodo, index, onMark}) {
  let [remain, setTime] = useState(timeRemain);
  deadline = moment(deadline, 'DD-MM-YYYY HH:mm:ss').unix();
  // подать endtime и функцию, которая будет триггерить когда время пройдет
  // Возможно переместить функциональный компонент ранее, для более быстрой загрузки таймера (начинается с пустых значений, что не есть хорошо)

  useEffect(() => {
    const currentDate = moment().unix();
    let diffTime = deadline - currentDate;
    let duration = moment.duration(diffTime * 1000, 'milliseconds');
    const interval = 1000;

    duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');

    if (diffTime === 1) {
      onMark(index, isDone);
      return;
    } else if (diffTime > 0) {
      const remainTime = setInterval(() => {
        let newRemain = [];
        --diffTime;
        duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');

        newRemain[0] = moment.duration(duration).hours();
        newRemain[1] = moment.duration(duration).minutes();
        newRemain[2] = moment.duration(duration).seconds();
        setTimeInTodo(index, newRemain);
        setTime(remain => remain = newRemain);
      }, interval);
      return () => clearInterval(remainTime);
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