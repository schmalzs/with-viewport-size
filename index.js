import React, { PureComponent } from 'react';

const withViewportSize = WrappedComponent => {
  class ViewportSize extends PureComponent {
    constructor(props) {
      super(props);
      this.state = { width: 0, height: 0 };
    }

    componentDidMount = () => {
      this.updateViewportDimensions();
      window.addEventListener('resize', this.updateViewportDimensions);
    };

    componentWillUnmount = () => {
      window.removeEventListener('resize', this.updateViewportDimensions);
    };

    updateViewportDimensions = () => {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    render = () => {
      const { width, height } = this.state;
      return <WrappedComponent {...this.props} viewport={{ width, height }} />;
    };
  }

  return ViewportSize;
};

export default withViewportSize;
