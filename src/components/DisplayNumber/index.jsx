import { useSelector } from 'react-redux';

function DisplayNumber() {
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Display Number</h1>
      <input value={number} readOnly />
    </div>
  );
}

export default DisplayNumber;
