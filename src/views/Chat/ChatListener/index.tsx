import { connect } from 'react-redux';
import { AppState } from 'store/root-reducer';
import { setMessage } from 'store/chat/action';
import Units from './units';

const mapStateToProps = (state: AppState) => ({
  authId: state.auth.id
});

const mapDispatchToProps = {
  setMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Units);
