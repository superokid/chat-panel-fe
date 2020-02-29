import { connect } from 'react-redux';
import { AppState } from 'store/root-reducer';
import Content from './Content';

const mapStateToProps = (state: AppState) => ({
  messages: state.chat.messages,
  activeConversation: state.chat.activeConversation
});

export default connect(mapStateToProps, null)(Content);
