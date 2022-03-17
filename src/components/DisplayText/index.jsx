import { useSelector } from 'react-redux';

function DisplayText() {
  console.log('text');
  const text = useSelector((state) => state.text.text);
  return (
    <div>
      <h1>Display Text</h1>
      <input value={text} readOnly />
    </div>
  );
}

export default DisplayText;
