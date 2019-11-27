import { connect } from 'react-redux';
import { AppState } from 'store/root-reducer';
import Units from './units';

const mapStateToProps = (state: AppState) => ({
  messages: state.chat.messages
});

export default connect(mapStateToProps, null)(Units);
