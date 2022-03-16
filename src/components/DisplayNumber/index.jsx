import PropTypes from 'prop-types';

function DisplayNumber({ state }) {
  return (
    <div>
      <h1>Display Number</h1>
      <input value={state} readOnly />
    </div>
  );
}

DisplayNumber.propTypes = {
  state: PropTypes.number.isRequired,
};

export default DisplayNumber;
