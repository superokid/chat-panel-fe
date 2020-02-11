import { connect } from 'react-redux';
import { login } from 'store/auth/action';
import Units from './units';

const mapDispatchToProps = {
  login
};

export default connect(null, mapDispatchToProps)(Units);
