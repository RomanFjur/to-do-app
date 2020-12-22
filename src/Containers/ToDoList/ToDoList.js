import React from 'react';
import ToDoItem from 'Components/ToDoItem/ToDoItem';
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
              index={index}
              name={item.name} 
              tags={item.tags}
              deadline={item.deadline}
              timeRemain={item.timeRemain}
              isDone={item.done}
              onMark={this.props.onMark}
              setTimeInTodo={this.props.setTimeInTodo}
              />
          )
        })}
      </div>
    );
  }
}

export default ToDoList;