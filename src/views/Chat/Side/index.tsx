import { connect } from 'react-redux';
import { getConversationStaff, getMessages } from 'store/chat/action';
import { AppState } from 'store/root-reducer';
import Units from './units';

const mapStateToProps = (state: AppState) => ({
  conversations: state.chat.conversations
});

const mapDispatchToProps = {
  getConversationStaff,
  getMessages
};

export default connect(mapStateToProps, mapDispatchToProps)(Units);
