import React from 'react';
import Input from '../../Components/Input/Input';
import styles from './ToDoForm.module.css';

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tags: '',
      timer: '',
      done: false
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
      timer: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    if (this.state.name !== '' && this.state.tags !== '') {
      const {setTodos} = this.props;
      setTodos([...this.props.todos, this.state], this.state.name, this.state);

      this.setState({
        name: '',
        tags: '',
        timer: '',
      });

      const inputs = document.querySelectorAll('input[type=text]');
      for (var i = 0;  i < inputs.length; i++) {
        inputs[i].value = '';
      };
    }
  }

  render () {
    return (
      <form className={styles.form}>
        <Input 
          name="name"
          onChange={this.changeNameHandler} 
          placeholder="My new todo"/>
        <Input 
          name="tags"
          onChange={this.changeTagsHandler} 
          placeholder="todo, important, other"/>
        <Input 
          name="timer"
          onChange={this.changeTimerHandler}
          placeholder="4m 20s"/>
        <input className={styles.button} type="submit" value="Create" onClick={this.handleSubmit}/>
      </form>
    );
  }
}

export default ToDoForm;
