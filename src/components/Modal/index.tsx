import { connect } from 'react-redux';
import { setModal } from 'store/global/action';
import { AppState } from 'store/root-reducer';
import Units from './units';

const mapStateToProps = (state: AppState) => ({
  isOpen: state.global.modalIsOpen,
  modalName: state.global.modalName
});

const mapDispatchToProps = {
  setModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Units);
