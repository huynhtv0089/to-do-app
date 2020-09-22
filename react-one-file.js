import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {v4 as uuid} from 'uuid';

const ListUser = (props) => {
  const onDelete = (id) => {
    props.delete(id);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>
              <button onClick={(e) => onDelete(user.id, e)}>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

class FormUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          id: uuid(),
          name: 'John3',
        }, 
        {
          id: uuid(),
          name: 'Peter3',
        }
      ],
      username: ''
    }
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  onChangeUsername(e) {
    this.setState({username: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      users: [
        ...this.state.users, 
        {
          id: uuid(),
          name: this.state.username
        }
      ],
      username: ''
    })
  }

  handleDelete(id) {
    console.log(id);
    this.setState({
      users: [...this.state.users.filter((user) => user.id !== id)]
    });
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.onChangeUsername} value={this.state.username} />
          <button onClick={this.onSubmit}>Submit</button>
        </form>
        <ListUser users={this.state.users} delete={this.handleDelete} />
      </div>
    );
  }
}

ReactDOM.render(<FormUser />, document.getElementById('root'));
