import React from 'react';
import ToDoForm from './Containers/ToDoForm/ToDoForm';
import ToDoList from './Containers/ToDoList/ToDoList';
import styles from './App.module.css';
import LocalStorage from './Classes/LocalStorage/LocalStorage';
import {HandlersContext} from './Constants.js';

const localStorage = new LocalStorage();

class App extends React.Component {
  state = {
    todos: [...localStorage.getToDos()]
  }

  setTodos = (name, todo, todos) => {
    this.setState({
      todos
    });

    localStorage.setToDo(name, todo);
  }

  setTimeInTodo = (index, remain) => {
    const todosCopy = [...this.state.todos];
    todosCopy[index].timeRemain = remain;

    this.setState({
      todos: todosCopy
    });

    localStorage.setToDo(todosCopy[index].name, todosCopy[index]);
  }

  deleteToDo = (index) => {
    const todosCopy = [...this.state.todos];
    localStorage.removeToDo(todosCopy[index].name);
    todosCopy.splice(index, 1);

    this.setState({
      todos: todosCopy
    });
  }

  onMarkAsDone = (index, isDone) => {
    const done = isDone;
    const todosCopy = [...this.state.todos];
    todosCopy[index].done = !done;

    this.setState({
      todos: todosCopy
    });

    localStorage.setToDo(todosCopy[index].name, todosCopy[index]);
  }

  render () {
    return (
      <div className={styles.body}>
        <ToDoForm 
          todos={this.state.todos} 
          setTodos={this.setTodos}
          />
        <HandlersContext.Provider value={this.deleteToDo}>
          <ToDoList
            todos={this.state.todos}
            onMark={this.onMarkAsDone}
            setTimeInTodo={this.setTimeInTodo}
          />
        </HandlersContext.Provider>
      </div>
    );
  }
}

export default App;
