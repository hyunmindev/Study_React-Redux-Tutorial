import { useCallback, useState } from 'react';

import AddNumberRoot from 'src/components/AddNumberRoot';
import DisplayNumberRoot from 'src/components/DisplayNumberRoot';

function Index() {
  const [state, setState] = useState(0);

  const handleAdd = useCallback((diff) => {
    setState((prevState) => prevState + diff);
  }, []);

  return (
    <>
      <h1>Root</h1>
      <AddNumberRoot onAdd={handleAdd} />
      <DisplayNumberRoot state={state} />
    </>
  );
}

export default Index;
