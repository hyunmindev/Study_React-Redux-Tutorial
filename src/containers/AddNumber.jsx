import { connect } from 'react-redux';

import AddNumber from 'src/components/AddNumber';

function mapDispatchToProps(dispatch) {
  return {
    onAdd(state) {
      dispatch({ type: 'CHANGE', payload: +state });
    },
  };
}

export default connect(null, mapDispatchToProps)(AddNumber);
