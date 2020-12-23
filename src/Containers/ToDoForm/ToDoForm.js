import React from 'react';
import Input from 'Components/Input/Input';
import styles from './ToDoForm.module.css';

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tags: '',
      deadline: ''
    }
  }

  changeNameHandler = (value) => {
    this.setState({
      name: value
    });
  }

  changeTagsHandler = (value) => {
    this.setState({
      tags: value.split(/\s+|,\s+|,+/gi)
    });
  }

  changeTimerHandler = (value) => {
    this.setState({
      deadline: value
    });
  }

  handleSubmit = (event) => {
    if (this.state.name !== '' && this.state.tags !== '') {
      const {setTodos} = this.props;
      setTodos(this.state.name, this.state.deadline, this.state, [...this.props.todos, this.state]);

      this.setState({
        name: '',
        tags: '',
        deadline: '',
      });

      const inputs = document.querySelectorAll('input[type=text]');
      for (var i = 0;  i < inputs.length; i++) {
        inputs[i].value = '';
      };
    }
  }

  render () {
    return (
      <div className={styles.form}>
        <Input 
          name="name"
          onChange={this.changeNameHandler} 
          placeholder="My new todo"/>
        <Input 
          name="tags"
          onChange={this.changeTagsHandler} 
          placeholder="todo, important, other"/>
        <Input 
          name="time"
          onChange={this.changeTimerHandler}
          placeholder="4m 20s"/>
        <button className={styles.button} onClick={this.handleSubmit}>Create</button>
      </div>
    );
  }
}

export default ToDoForm;
