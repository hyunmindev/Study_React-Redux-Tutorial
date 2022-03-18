import { useSelector } from 'react-redux';

function DisplayNumber() {
  console.log('number');
  const number = useSelector((state) => state.counter.number);
  return (
    <div>
      <h1>Display Number</h1>
      <input value={number} readOnly />
    </div>
  );
}

export default DisplayNumber;
