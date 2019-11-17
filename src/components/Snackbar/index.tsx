import { connect } from 'react-redux';
import { AppState } from 'store/root-reducer';
import { snackbarClear } from 'store/global/action';
import Snackbar from './units';

const mapStateToProps = (state: AppState) => ({
  snackbarIsOpen: state.global.snackbarIsOpen,
  snackbarType: state.global.snackbarType,
  snackbarMessage: state.global.snackbarMessage
});

const mapDispatchToProps = {
  snackbarClear
};

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar);
