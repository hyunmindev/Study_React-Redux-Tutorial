import { connect } from 'react-redux';

import DisplayNumber from 'src/components/DisplayNumber';

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, null)(DisplayNumber);
