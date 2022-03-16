import { useState } from 'react';
import store from 'src/store';

function AddNumber() {
  const [state, setState] = useState('');

  const handleClick = () => {
    store.dispatch({ type: 'CHANGE', payload: +state });
  };
  return (
    <div>
      <h1>Add Number</h1>
      <button type='button' onClick={handleClick}>
        +
      </button>
      <input value={state} onInput={({ target }) => setState(target.value)} />
    </div>
  );
}

export default AddNumber;
