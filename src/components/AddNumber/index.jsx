import { useState } from 'react';
import PropTypes from 'prop-types';

function AddNumber({ onAdd }) {
  const [state, setState] = useState('');

  return (
    <div>
      <h1>Add Number</h1>
      <button
        type='button'
        onClick={() => {
          onAdd(state);
        }}
      >
        +
      </button>
      <input value={state} onInput={({ target }) => setState(target.value)} />
    </div>
  );
}

AddNumber.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddNumber;
