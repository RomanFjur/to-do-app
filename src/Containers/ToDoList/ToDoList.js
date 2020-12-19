import React from 'react';
import ToDoItem from '../../Components/ToDoItem/ToDoItem';
import styles from './ToDoList.module.css';

class ToDoList extends React.Component {
  render () {
    return (
      <div className={styles.list}>
        {this.props.todos.length === 0 && (
          <p className={styles.emptyList}>You don't need to do anything!</p>
        )}
        {this.props.todos.map((item, index) => {
          return (
            <ToDoItem 
              key={item.name} //здесь будут присваиваться id
              name={item.name} 
              tags={item.tags} 
              timer={item.timer} 
              index={index} 
              isDone={item.done}
              onMark={this.props.onMark}/>
          )
        })}
      </div>
    );
  }
}

export default ToDoList;