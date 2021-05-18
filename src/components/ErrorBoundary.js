import React from 'react';
import i18n from '../i18n';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>{i18n.t('message.hasError')}</h1>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
