import { useState } from 'react';

import store from 'src/store/reducers';

function Title() {
  const [state, setState] = useState(0);
  store.subscribe(() => setState(store.getState()));

  return <h1>{state}</h1>;
}

export default Title;
