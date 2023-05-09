import GA4React from 'ga-4-react';
import { env } from '../utils/env/config';

export const setGoogleAnalytics = async () => {
  const { analytic } = env;
  if (!analytic) {
    console.log(`##### PLEASE CONFIG GOOGLE ANALYTICS ####`);
    return;
  }

  try {
    const ga4react = new GA4React(`${analytic}`);
    let ga4;
    if (!GA4React.isInitialized()) {
      ga4 = await ga4react.initialize();
    } else {
      ga4 = GA4React.getGA4React();
    }

    return {
      pageView: (pathname, routeName, title) =>
        ga4.pageview(pathname, routeName, title),
    };
  } catch (error) {
    return null;
  }
};
