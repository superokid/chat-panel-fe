import { connect } from 'react-redux';
import { setMessage } from 'store/chat/action';
import Units from './units';

const mapDispatchToProps = {
  setMessage
};

export default connect(null, mapDispatchToProps)(Units);
