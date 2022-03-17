import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddNumber() {
  const [state, setState] = useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Add Number</h1>
      <button
        type='button'
        onClick={() => {
          dispatch({ type: 'CHANGE', payload: +state });
        }}
      >
        +
      </button>
      <input value={state} onInput={({ target }) => setState(target.value)} />
    </div>
  );
}

export default AddNumber;
