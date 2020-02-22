import { connect } from 'react-redux';
import { AppState } from 'store/root-reducer';
import { setMessage, getIntegrationToken } from 'store/chat/action';
import Units from './units';

const mapStateToProps = (state: AppState) => ({
  authId: state.auth.id
});

const mapDispatchToProps = {
  setMessage,
  getIntegrationToken
};

export default connect(mapStateToProps, mapDispatchToProps)(Units);
