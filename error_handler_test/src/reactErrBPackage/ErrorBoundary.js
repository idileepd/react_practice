import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Logging", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      console.log("Got Error::");
      console.log(`${this.props?.type}`);
      return <h1>Some thing went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
