import PropTypes from 'prop-types';

function DisplayNumber({ state, unit }) {
  return (
    <div>
      <h1>Display Number</h1>
      <input value={state} readOnly />
      {unit}
    </div>
  );
}

DisplayNumber.propTypes = {
  state: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default DisplayNumber;
