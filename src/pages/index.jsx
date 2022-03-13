import Title from 'src/components/Title';

import store from 'src/store/reducers';

function Index() {
  return (
    <>
      <button
        type='button'
        onClick={() => {
          store.dispatch({ type: 'DECREMENT' });
        }}
      >
        DECREMENT
      </button>
      <Title />
      <button
        type='button'
        onClick={() => {
          store.dispatch({ type: 'INCREMENT' });
        }}
      >
        INCREMENT
      </button>
    </>
  );
}

export default Index;
