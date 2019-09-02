import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitems extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
          />{' '}
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            Remove
          </button>
        </p>
      </div>
    );
  }
}

//PropTypes
Todoitems.propTypes = {
  todo: PropTypes.object.isRequired
};

//btnStyle
const btnStyle = {
  background: '#fff0000',
  color: 'red',
  border: 'none',
  padding: '5px 10px',
  cursor: 'pointer',
  float: 'right'
};

export default Todoitems;

//PropTypes
Todoitems.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};
