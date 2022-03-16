import React from 'react';
import PropTypes from 'prop-types';

import AddNumber from 'src/components/AddNumber';

function AddNumberRoot({ onAdd }) {
  return (
    <div>
      <h1>Add Number Root</h1>
      <AddNumber onAdd={onAdd} />
    </div>
  );
}

AddNumberRoot.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default React.memo(AddNumberRoot);
