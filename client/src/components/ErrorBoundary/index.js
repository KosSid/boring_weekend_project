import React, {PureComponent} from "react";
import ErrorBoundaryPage from "../../pages/ErrorBoundaryPage";

export default class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      eventId: "",
      errorInfo: "",
      hasError: false
    };
  }
  // use to log an error in Sentry
  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      hasError: true,
      errorInfo
    })
  }
  render() {
    const {hasError, errorInfo, error} = this.state;
    if (hasError) return <ErrorBoundaryPage errorInfo={errorInfo} error={error} />
    return this.props.children;
  }
}
