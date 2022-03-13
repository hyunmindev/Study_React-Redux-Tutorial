import { useSelector } from 'react-redux';

function Title() {
  const number = useSelector((state) => state);
  return <h1>{number}</h1>;
}

export default Title;
