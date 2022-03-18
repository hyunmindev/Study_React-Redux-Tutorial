import { useDispatch } from 'react-redux';

import { increase, decrease, changeText } from 'src/store/rootAction';
import { decreaseAsync, increaseAsync } from 'src/store/rootThunks';

function Change() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Add Number</h1>
      <button type='button' onClick={() => dispatch(decrease())}>
        -
      </button>
      <button type='button' onClick={() => dispatch(increase())}>
        +
      </button>
      <input
        onInput={({ target: { value } }) => {
          dispatch(changeText(value));
        }}
      />
      <button type='button' onClick={() => dispatch(decreaseAsync())}>
        -
      </button>
      <button type='button' onClick={() => dispatch(increaseAsync())}>
        +
      </button>
    </div>
  );
}

export default Change;
