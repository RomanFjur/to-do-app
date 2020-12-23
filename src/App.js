import React from 'react';
import ToDoForm from './Containers/ToDoForm/ToDoForm';
import ToDoList from './Containers/ToDoList/ToDoList';
import styles from './App.module.css';
import LocalStorage from './Classes/LocalStorage/LocalStorage';
import {HandlersContext} from './Constants.js';
import moment from 'moment';

const localStorage = new LocalStorage();

class App extends React.Component {
  state = {
    todos: [...localStorage.getToDos()]
  }

  setTodos = (name, deadline, todo, todos) => {
    let formatedTime = deadline;
    
    for (let index = 0; index < 3; index++) {
      if (formatedTime.search(/h/gi) === -1) {
        formatedTime = formatedTime.split(/\s+|,\s+|,+/gi);
        formatedTime.splice(0, 0, '0h');
        formatedTime = formatedTime.toString();
      } else if (formatedTime.search(/m/gi) === -1) {
        formatedTime = formatedTime.split(/\s+|,\s+|,+/gi);
        formatedTime.splice(1, 0, '0m');
        formatedTime = formatedTime.toString();
      } else if (formatedTime.search(/s/gi) === -1) {
        formatedTime = formatedTime.split(/\s+|,\s+|,+/gi);
        formatedTime.splice(2, 0, '0s');
        formatedTime = formatedTime.toString();
      };
    }

    formatedTime = formatedTime.replace(/\D+/gi, ' ').split(' ');
    formatedTime.splice(formatedTime.length-1, 1);

    todo.deadline = moment(moment().add(formatedTime[0], 'H').add(formatedTime[1], 'm').add(formatedTime[2], 's')).format('DD-MM-YYYY HH:mm:ss');
    todo.done = false;

    this.setState({
      todos
    });

    localStorage.setToDo(name, todo);
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
          />
        </HandlersContext.Provider>
      </div>
    );
  }
}

export default App;
