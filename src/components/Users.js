import { Component } from 'react';

import User from './User';
import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component {
  //with the class components state is always object and it will always have reserved word state
  //with class components you have to group all variables in one object
  //with functional components state can be anything - boolean, number or object 
  //const [showUsers, setShowUsers] = useState(true) - this is boolean state
  constructor() {
    //we use super because we are extending our class from another class 
    super();
    this.state = {
      showUsers: true,
      more: 'Test',
    };
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; // This is not how we do it with class components
    // with class components we have to use the function setState to set value of states
    // react merges the state you set with the one that was initially declared in class components 
    // here we passed the function to the state to update showUsers variable
    this.setState( (curState) => {return { showUsers: !curState.showUsers };} );
  }

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    
    //this.toggleUsersHandler.bind(this) - we use this to reference function in the class
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
