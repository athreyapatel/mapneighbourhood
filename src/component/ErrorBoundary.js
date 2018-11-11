import React, {Component} from 'react'

class ErrorBoundary extends Component {
  componentDidCatch(error, errorInfo) {
    this.props.updateSuperState({
      error: error,
      errorInfo: errorInfo
    })
  }
  render() {
    if (this.props.errorInfo) {
    return (
      <div className='error'>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {this.props.error && this.props.error.toString()}
          <br />
          {this.props.errorInfo.stack}
        </details>
      </div>
      );
    }
      return this.props.children;
  }
}

export default ErrorBoundary
