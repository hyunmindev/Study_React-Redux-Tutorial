import { useState } from 'react';
import PropTypes from 'prop-types';

function AddNumber({ onAdd }) {
  const [state, setState] = useState('');

  const handleClick = () => {
    onAdd(+state);
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

AddNumber.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddNumber;
