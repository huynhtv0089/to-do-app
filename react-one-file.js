- Xin chào mọi người, chủ đề về buổi talk show hôm nay, em sẽ giới thiệu về ReactJS,
- Về ReactJS thì chắc mọi người đã biết tới nó, nó là 1 thư viện Javascript theo xu hướng Single Page Application.
- ReactJS được đội ngữ Developer Facebook phát triển và được đem sử dụng cho chính 2 mạng xã hội lớn: facebook và instagram

- Về phần tạo 1 application React, đảm bảo phải cài đặt nodejs vào máy trước tiên, rồi mới thực hiện các bước như trên

- React cung cấp 1 method là ReactDOM.render(), mục đích của method này là render nội dung tới màn hình trình duyệt,
  method này có 2 tham số, tham số đầu tiên là HTML hoặc là JSX, tham số thứ 2 là 1 Element của cây DOM.
  Ví dụ ở đây, em sẽ sử dụng method ReactDOM.render để tạo ra 1 chữ Hello Word ra màn hình,
  Nó đã in ra chữ Hello Word bên trong 1 thẻ <div> có id là root
  ``` demo
	ReactDOM.render(<p>Hello, word!</p>, document.getElementById('root'));
  ```
  
  Ta đã in ra 1 chử Hello Word ra màn hình, nó chỉ là nội dụng tĩnh thôi, nhưng ReactJS là 1 thư viện Javascript nó có thể
  hỗ trợ tạo ra nội dung Dynanmic, nhờ vào JSX nó viết tắt của chữ Javascript XML. 
  JSX cho phép chúng ta nhúng code HTML và trong javascript
  ``` demo
	const listNumber = [1, 2, 3, 4, 5, 6]
	const x = <p>Array listNumber = {JSON.stringify(listNumber)} </p>
	ReactDOM.render(x, document.getElementById('root'));
  ```
  
  hoặc ta thử dùng JSX làm phép toán nhân, 9 * 9 bằng bao nhiêu
  ``` demo
	const x = <p>Array 9 * 9 = {9*9} </p>
	ReactDOM.render(x, document.getElementById('root'));
  ```
  
  Nếu chúng ta viết nhiều dòng JSX thì dử dụng 2 dấu ngoạc nhọn để nhóm chúng lại với nhau, và JSX phải bắt buột có 1 HTML root 
	để wrap nội dụng lại với nhau, nếu ko có nó sẽ báo lỗi, 1 số trường hợp có thể sử dụng ký tự <> và </> để làm HTML wrap
  ``` demo
	const x = (
		<div>
			<p>Array 9 * 9 = {9*9} </p>
			<p>Array 9 * 9 = {9*9} </p>
		</div>
	);
	ReactDOM.render(x, document.getElementById('root'));
  ```
  
- Rồi nếu chúng ta muốn làm 1 ứng dụng web đàng hàng thì không thể viết 1 cục JSX t rồi để cho ReactDOM render ra ngoài browser được
  Vì vậy ta sẽ qua phần tiếp theo là Component.
  1 Ứng dụng ReactJS được xây dựng xung quanh các component, có 2 cách định nghĩa 1 component, là sử dụng class hoặc function
  ví dụ ứng dụng web của chúng ta có 3 layout là phần Header, phần content, phần footer. 
  ``` demo
	function Header() {
	  
	  return (
		<header>
		  This is area header
		</header>
	  );
	 
	}
	class Section extends React.Component {
	  render() {
		return (
		  <section>
			This is area content
		  </section>
		);
	  }
	}
	function Footer() {
	  return (
		<footer>
		  This is area footer
		</footer>
	  );
	}
	ReactDOM.render(
	  <>
		<Header />
		<Section />
		<Footer />
	  </>, 
	  document.getElementById('root')
	);
  ```
  Thì ta sẽ tạo ra 3 component và gom chúng lại với nhau để render ra trình duyệt.
  
  Chúng ta có thể tái sử dụng một component ở nhiều nơi, trong một component lại có thể chứa thành phần khác. Ví dụ em sẽ tạo ra 1 component
  App sẽ gọi 3 component Header, Section và Footer
  ``` demo
	function Header() {
	  return (
		<header>
		  This is area header
		</header>
	  );
	 
	}
	class Section extends React.Component {
	  render() {
		return (
		  <section>
			This is area content
		  </section>
		);
	  }
	}
	function Footer() {
	  return (
		<footer>
		  This is area footer
		</footer>
	  );
	}
	function App() {
	  return (
		<>
		  <Header />
		  <Section />
		  <Footer />
		</>
	  );
	}
	ReactDOM.render(
	  <App />, 
	  document.getElementById('root')
	);
  ```
  Em sẽ tạo nên 2 Component nữa là 1 form nhập tên user, component thứ 2 là hiển thị danh sach user
  ``` demo
	function ListUser() {
	  return (
		<table>
		  <thead>
			<tr>
				<td>Name</td>
				<td>Action</td>
			</tr>
		  </thead>
		  <tbody>
		    <tr>
			  <td>John</td>
			  <td><button>x</button></td>
			</tr>
			<tr>
			  <td>Anna</td>
			  <td><button>x</button></td>
			</tr>
		  </tbody>
		</table>
	  );
	 
	}
	class FormUser extends React.Component {
	  render() {
		return (
		  <form>
			<input type="text" />
			<button>Submit</button>
			<ListUser />
		  </form>
		);
	  }
	}
	function Header() {
	}
	class Section extends React.Component {
	}
	function Footer() {
	}
	function App() {
	}
	ReactDOM.render(
	);
  ```
  Ý tưởng ở đây là khi người dùng nhập tên vào ô input và click vào submit thì list user bên dưới sẽ hiển thị, em sẽ sử dụng 2 khái niệm của react
  là Props và State. 
  Props: giúp các component tương tác với nhau, component nhận input gọi là props, và trả thuộc tính mô tả những gì component con sẽ render. 
  ```demo
	function ListUser(props) {
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
				<td><button>x</button></td>
			  </tr>
			))}
		  </tbody>
		</table>
	  );
	 
	}
	class FormUser extends React.Component {
	  render() {
		const data = [
		  {
			id: uuid(),
			name: 'January'
		  },
		  {
			id: uuid(),
			name: 'February'
		  }
		]
		return (
		  <form>
			<input type="text" />
			<button>Submit</button>
			<ListUser users={data} />
		  </form>
		);
	  }
	}

	function Header() {
	}

	class Section extends React.Component {
	}

	function Footer() {
	}

	function App() {
	}

	ReactDOM.render(
	);
  ```
  Vì Props là bất biến, nên khái niệm State ra đời, state sẽ lưu trữ data của component, khi data state thay đổi thì component đồng thời render lại để cập nhật UI.
  Nếu chúng ta gán những những props là những giá trị state, thì khi component render lại UI thì các props cũng thay đổi theo.
  ``` demo
	function ListUser(props) {
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
				<td><button onClick={(e) => onDelete(user.id, e)}>x</button></td>
			  </tr>
			))}
		  </tbody>
		</table>
	  );
	}

	class FormUser extends React.Component {
	  constructor(){
		super();
		this.state = {
		  users: [
			{
			  id: uuid(),
			  name: 'January'
			},
			{
			  id: uuid(),
			  name: 'February'
			}
		  ],
		  name: ''
		}

		this.getUsername = this.getUsername.bind(this);
		this.addUser = this.addUser.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	  }

	  getUsername(e) {
		this.setState({name: e.target.value});
		//this.state.name = e.target.value;
		//console.log(e.target.value);
	  }

	  addUser(e) {
		e.preventDefault();
		let newUser = {
		  id: uuid(),
		  name: this.state.name
		}

		this.setState({
		  users: [...this.state.users, newUser],
		  name: ''
		});
	  }

	  handleDelete(id) {
		this.setState({
		  users: [...this.state.users.filter(user => user.id !== id)],
		});
	  }

	  render() {
		return (
		  <form>
			<input type="text" onChange={this.getUsername} value={this.state.name} />
			<button onClick={this.addUser}>Submit</button>
			<ListUser users={this.state.users} delete={this.handleDelete} />
		  </form>
		);
	  }
	}

	function Header() {
	}

	class Section extends React.Component {
	}

	function Footer() {
	}

	function App() {
	}

	ReactDOM.render(
	);

  ```

======================================================================================================================
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
function ListUser(props) {
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
            <td><button onClick={(e) => onDelete(user.id, e)}>x</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

class FormUser extends React.Component {
  constructor(){
    super();
    this.state = {
      users: [
        {
          id: uuid(),
          name: 'January'
        },
        {
          id: uuid(),
          name: 'February'
        }
      ],
      name: ''
    }

    this.getUsername = this.getUsername.bind(this);
    this.addUser = this.addUser.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  getUsername(e) {
    this.setState({name: e.target.value});
    //this.state.name = e.target.value;
    //console.log(e.target.value);
  }

  addUser(e) {
    e.preventDefault();
    let newUser = {
      id: uuid(),
      name: this.state.name
    }

    this.setState({
      users: [...this.state.users, newUser],
      name: ''
    });
  }

  handleDelete(id) {
    this.setState({
      users: [...this.state.users.filter(user => user.id !== id)],
    });
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.getUsername} value={this.state.name} />
        <button onClick={this.addUser}>Submit</button>
        <ListUser users={this.state.users} delete={this.handleDelete} />
      </form>
    );
  }
}

function Header() {
  return (
    <header>
      This is area header
    </header>
  );
}

class Section extends React.Component {
  render() {
    return (
      <section>
        <FormUser />
      </section>
    );
  }
}

function Footer() {
  return (
    <footer>
      This is area footer
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

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

