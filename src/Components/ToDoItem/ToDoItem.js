import React from 'react';
import styles from './ToDoItem.module.css';
import {HandlersContext} from '../../Constants.js';

function ToDoItem ({name, tags, timer, index, isDone, onMark}) {
  return (
    <HandlersContext.Consumer>
      {value => 
        <div className={styles.toDo}>
          <div className={styles.checkboxDiv} onClick={() => onMark(index, isDone)}>
            {isDone && <span className={styles.checkboxSpan}></span>}
          </div>
          <p className={styles.name}>{name}</p>
          <div className={styles.delete} onClick={() => {value(index)}}></div>
          <p className={styles.timer}>{timer}</p>
          <p className={styles.tags}>#{tags.join(' #')}</p>
        </div>
      }
    </HandlersContext.Consumer>
  );
}

export default ToDoItem;