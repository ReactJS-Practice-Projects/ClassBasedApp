import { Component } from 'react';

import classes from './User.module.css';

//for class based component we need to extend from Component in order to use props
//with this approach we don't pass porps but we use them inside of the class
//we can use class based components with functional components 
class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  } 
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
