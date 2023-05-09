import { Fragment } from 'preact';
import React from 'react';
import { setGoogleAnalytics } from '../../functions/ga-react';
import { env } from '../../utils/env/config';

export default (routeName) => (Wrap) => {
  class WrapperComponent extends React.Component {
    constructor(props) {
      super(props);
    }

    async componentDidMount() {
      const { analytic } = env;
      if (!analytic) {
        console.log(`##### PLEASE CONFIG GOOGLE ANALYTICS ####`);
        return;
      }

      switch (env.node) {
        case 'development':
          break;
        case 'production':
          const { location } = window;
          const pathname = location.pathname;
          const ga = await setGoogleAnalytics();
          ga && ga.pageView(pathname, routeName, document.title);
          break;
      }
    }

    render() {
      return (
        <Fragment>
          <Wrap {...this.props} />
        </Fragment>
      );
    }
  }
  return WrapperComponent;
};
