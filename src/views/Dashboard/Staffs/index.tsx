import { connect } from 'react-redux';
import { getStaffs } from 'store/staffs/action';
import { AppState } from 'store/root-reducer';
import Staffs from './units';

const mapStateToProps = (state: AppState) => ({
  staffs: state.staffs.staffs
});

const mapDispatchToProps = {
  getStaffs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Staffs);
