import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from 'src/store/reducers';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={createStore(reducer)}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
