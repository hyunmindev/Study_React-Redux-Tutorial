import React from 'react';

import AddNumberContainer from 'src/containers/AddNumber';

function AddNumberRoot() {
  return (
    <div>
      <h1>Add Number Root</h1>
      <AddNumberContainer />
    </div>
  );
}

export default React.memo(AddNumberRoot);
