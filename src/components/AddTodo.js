import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChangeTitle = (e) => {
        //this.setState({title: e.target.value});
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
        console.log(12312312)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="title"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add todo ..." 
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                />
                <input 
                    className="btn" 
                    type="submit" 
                    value="Submit" 
                    style={{flex: '1'}}
                />
            </form>
        );
    }
}

export default AddTodo;