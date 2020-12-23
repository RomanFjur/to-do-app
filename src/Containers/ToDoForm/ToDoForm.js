import React from 'react';
import Input from 'Components/Input/Input';
import styles from './ToDoForm.module.css';
import moment from 'moment';

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tags: '',
      done: false,
      deadline: '',
      timeRemain: [0, 0, 0]
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
    let formatedTime = value;
    
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

    this.setState({
      deadline: moment(moment().add(formatedTime[0], 'H').add(formatedTime[1], 'm').add(formatedTime[2], 's')).format('DD-MM-YYYY HH:mm:ss')
    });
  }

  handleSubmit = async (event) => {
    if (this.state.name !== '' && this.state.tags !== '') {
      const {setTodos} = this.props;
      setTodos(this.state.name, this.state, [...this.props.todos, this.state]);

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
