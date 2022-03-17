import { shallowEqual, useSelector } from 'react-redux';

function DisplayText() {
  console.log('here');
  const obj = useSelector((state) => state.obj, shallowEqual);
  return (
    <div>
      <h1>Display Text</h1>
      <input value={obj.text} readOnly />
    </div>
  );
}

export default DisplayText;
