import { connect } from 'react-redux';
import { AppState } from 'store/root-reducer';
import { postMessage } from 'store/chat/action';
import Units from './units';

const mapStateToProps = (state: AppState) => ({
  activeConversation: state.chat.activeConversation
});

const mapDispatchToProps = {
  postMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Units);
