import React from 'react';
import styles from './ToDoItem.module.css';
import Timer from 'Components/Timer/Timer';
import {HandlersContext} from 'Constants.js';

function ToDoItem ({index, name, tags, time, deadline, isDone, onMark}) {
  return (
    <HandlersContext.Consumer>
      {value => 
        <div className={styles.toDo}>
          <div className={styles.checkboxDiv} onClick={() => onMark(index, isDone)}>
            {isDone && <span className={styles.checkboxSpan}></span>}
          </div>
          <p className={isDone ? styles.nameChecked : styles.name}>{name}</p>
          <div className={styles.delete} onClick={() => {value(index)}}></div>
          <Timer 
            deadline={deadline}
            isDone={isDone} 
            style={isDone ? styles.tagsAndTimeChecked : styles.time}
            index={index}
          />
          <p className={isDone ? styles.tagsAndTimeChecked : styles.tags}>#{tags.join(' #')}</p>
        </div>
      }
    </HandlersContext.Consumer>
  );
}

export default ToDoItem;