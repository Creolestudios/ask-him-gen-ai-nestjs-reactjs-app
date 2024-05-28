import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or perform any other actions here.
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error message that is displayed to the user.
      return <div style={{margin: '20px 10px', textAlign: 'center'}}>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;