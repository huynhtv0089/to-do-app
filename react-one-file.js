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

======================================================================================================================
[Action/index.js]
  
export const increaseNumber = () => ({
    type: 'INCREASE'
})
  
export const decreaseNumber = () => ({
    type: 'DECREASE'
})

export const setNumber = (value) => ({
    type: 'SET_NUMBER',
    number: value
})
---------------------------------------------------------------------------------------------------------------------
[Container/App.js]

import React from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

class App extends React.Component {
  
  render() {
    return (
      <>
        <Header />
        <Section />
        <Footer />
      </>
    );
  }
}

export default App;
---------------------------------------------------------------------------------------------------------------------
[Container/Footer.js]

import React from 'react';
import { connect } from 'react-redux';
import { decreaseNumber } from './../Action'

function Footer(props) {
    return (
      <footer>
        <p>This is area footer [{props.numberProps}]</p>
        <button onClick={props.onDecrease}>Decrease</button>
      </footer>
    );
}

const mapStateToProps = (state) => ({
  numberProps: state.NumberReducer.number
})
const mapDispatchToProps = (dispatch) => ({
  onDecrease: () => dispatch(decreaseNumber())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
---------------------------------------------------------------------------------------------------------------------
[Container/Header.js]

import React from 'react';
import { connect } from 'react-redux';
import { increaseNumber } from './../Action'

function Header(props) {
    return (
        <header>
            <p>This is area header [{props.numberProps}]</p>
            <button onClick={props.onIncrease}>Increase</button>
        </header>
    );
}

const mapStateToProps = (state) => ({
    numberProps: state.NumberReducer.number
})
const mapDispatchToProps = (dispatch) => ({
    onIncrease: () => dispatch(increaseNumber()),
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
---------------------------------------------------------------------------------------------------------------------
[Container/Section.js]

import React from 'react';
import { connect } from 'react-redux';
import { setNumber } from './../Action'

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
        this.onChangeNumber = this.onChangeNumber.bind(this);
    }

    onChangeNumber(e) {
        this.setState({
            number: e.target.value
        })
    }

    render() {
        return (
            <section>
                <p>This is area Section [{this.props.numberProps}]</p>
                <div>
                    <input type="number" onChange={this.onChangeNumber} value={this.state.number} />
                    <button onClick={(e) => this.props.passNumber(this.state.number, e)}>Submit</button>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    numberProps: state.NumberReducer.number
})
const mapDispatchToProps = (dispatch) => ({
    passNumber: (number) => dispatch(setNumber(number)),
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Section)
---------------------------------------------------------------------------------------------------------------------
[Reducer/numberReducer.js]

function numberReducer(state = {number: 0}, action) {
    switch (action.type) {
      case 'INCREASE':
        return {
          number: ++state.number
        }
      case 'DECREASE':
        return {
          number: --state.number
        }
      case 'SET_NUMBER':
        console.log(action.number);
        return {
          number: action.number
        }
      default:
        return state
    }  
}

export default numberReducer;
---------------------------------------------------------------------------------------------------------------------
[Reducer/RootReducer.js]

import { combineReducers } from 'redux';
import NumberReducer from './NumberReducer';

export default combineReducers({
    NumberReducer
})
---------------------------------------------------------------------------------------------------------------------
[index.js]

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './Reducer/RootReducer';
import App from './Container/App';

const store = createStore(RootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

