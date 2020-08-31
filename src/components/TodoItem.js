import React, {Component} from 'react';

class TodoItem extends Component {
    // constructor() {
    //    super();
    //    this.testOnclick = this.testOnclick.bind(this);
    // }

    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            padding: '10px',
            borderBottom: '1px dotted #333'
        }
    }

    delTodo = (id) => {
        /*this.props.delTodo(id);
        console.log(id);*/
    }

    testOnclick = (id) => {
        console.log(id);
    }

    render() {
        const {id, title} = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <input 
                    type="checkbox" 
                    value={this.props.title} 
                    onChange={this.props.markComplete.bind(this, id)} 
                /> 

                {' '}

                {title}

                <button
                    style={btnStyle} 
                    onClick={this.testOnclick.bind(this, id)}
                >
                    x
                </button>
            </div>
        );
    }
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50px',
    cursor: 'pointer',
    float: 'right'
};

export default TodoItem;