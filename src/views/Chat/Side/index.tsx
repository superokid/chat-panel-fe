import { connect } from 'react-redux';
import { getConversationStaff, setConversationActive, getMessages } from 'store/chat/action';
import { getStaffs } from 'store/staffs/action';
import { AppState } from 'store/root-reducer';
import Units from './units';

const mapStateToProps = (state: AppState) => ({
  conversations: state.chat.conversations,
  activeConversation: state.chat.activeConversation
});

const mapDispatchToProps = {
  getConversationStaff,
  setConversationActive,
  getMessages,
  getStaffs
};

export default connect(mapStateToProps, mapDispatchToProps)(Units);
