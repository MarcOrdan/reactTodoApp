import React, { Component } from 'react';
import TodoItem from './Todoitems';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleComplete={this.props.toggleComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
