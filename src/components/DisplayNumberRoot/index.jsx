import PropTypes from 'prop-types';

import DisplayNumber from 'src/components/DisplayNumber';

function DisplayNumberRoot({ state }) {
  return (
    <div>
      <h1>Display Number Root</h1>
      <DisplayNumber state={state} />
    </div>
  );
}

DisplayNumberRoot.propTypes = {
  state: PropTypes.number.isRequired,
};

export default DisplayNumberRoot;
