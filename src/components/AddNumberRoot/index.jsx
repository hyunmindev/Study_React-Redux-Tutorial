import React from 'react';

import AddNumber from 'src/components/AddNumber';

function AddNumberRoot() {
  return (
    <div>
      <h1>Add Number Root</h1>
      <AddNumber />
    </div>
  );
}

export default React.memo(AddNumberRoot);
