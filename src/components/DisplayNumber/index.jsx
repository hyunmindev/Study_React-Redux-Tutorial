import { useEffect, useState } from 'react';

import store from 'src/store';

function DisplayNumber() {
  const [state, setState] = useState(0);
  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);
  return (
    <div>
      <h1>Display Number</h1>
      <input value={state} readOnly />
    </div>
  );
}

export default DisplayNumber;
