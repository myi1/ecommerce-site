import React from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
  ErrorImageBodyText,
} from "./ErrorBoundary.styles";
import errorImage from "../../assets/images/error.png";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    //
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={errorImage} />
          <ErrorImageText>Oh no! We tripped up!</ErrorImageText>
          <ErrorImageBodyText>
            You had been told you should always check your shoes before getting
            up from the bleachers. Freshman were known to walk under them and
            tie peoples’ shoes together.
          </ErrorImageBodyText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
