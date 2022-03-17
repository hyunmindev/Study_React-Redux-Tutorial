import 'src/styles/global.css';
import { Provider } from 'react-redux';

import store from 'src/store';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
