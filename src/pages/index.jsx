import Title from 'src/components/Title';

import { useDispatch } from 'react-redux';

function Index() {
  const dispatch = useDispatch();
  const decreaseState = () => dispatch({ type: 'DECREMENT' });
  const increaseState = () => dispatch({ type: 'INCREMENT' });

  return (
    <>
      <button type='button' onClick={decreaseState}>
        decrease
      </button>
      <Title />
      <button type='button' onClick={increaseState}>
        increase
      </button>
    </>
  );
}

export default Index;
