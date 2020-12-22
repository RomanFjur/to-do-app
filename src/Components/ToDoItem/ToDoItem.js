import React from 'react';
import styles from './ToDoItem.module.css';
import Timer from 'Components/Timer/Timer';
import {HandlersContext} from 'Constants.js';

function ToDoItem ({index, name, tags, time, deadline, timeRemain, isDone, onMark, setTimeInTodo}) {
  return (
    <HandlersContext.Consumer>
      {value => 
        <div className={styles.toDo}>
          <div className={styles.checkboxDiv} onClick={() => onMark(index, isDone)}>
            {isDone && <span className={styles.checkboxSpan}></span>}
          </div>
          <p className={styles.name}>{name}</p>
          <div className={styles.delete} onClick={() => {value(index)}}></div>
          <Timer 
            deadline={deadline}
            timeRemain={timeRemain} 
            isDone={isDone} 
            style={styles.time} 
            setTimeInTodo={setTimeInTodo}
            index={index}
            onMark={onMark}
            />
          <p className={styles.tags}>#{tags.join(' #')}</p>
        </div>
      }
    </HandlersContext.Consumer>
  );
}

export default ToDoItem;