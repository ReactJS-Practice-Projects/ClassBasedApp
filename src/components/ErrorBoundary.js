import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  //whenever we add the metheod componentDidCatch to any class based component it makes the component to be ErrorBoundary
  //we cannot add this method to functional components and there is not any equvalance to it in the functionalcomponents. 
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
