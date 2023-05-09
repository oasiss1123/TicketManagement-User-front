export const env = {
  title: process.env.REACT_APP_TITLE,
  url: process.env.REACT_APP_URL_HOST,
  node: process.env.REACT_APP_NODE_ENV,
  node_env: process.env.REACT_APP_NODE_ENV,
  port: process.env.REACT_APP_PORT,
  analytic: process.env.REACT_ANALYTICS_KEY,
  version: process.env.REACT_APP_VERSION,
  google: {
    client_key: process.env.REACT_APP_GOOGLE_CLIENT_KEY,
  },
  url_dev: process.env.REACT_APP_URL_DEV,
  url_prd: process.env.REACT_APP_URL_PRD,
  key_storage: process.env.REACT_APP_KEY_STORAGE || '',
  key_hash: process.env.REACT_APP_KEY_HASH,
  token: process.env.X_TOKEN,
};
