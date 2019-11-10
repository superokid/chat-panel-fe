import { connect } from 'react-redux';
import { getStaff } from 'store/staffs/action';
import { AppState } from 'store/root-reducer';
import Staffs from './units';

const mapStateToProps = (state: AppState) => ({
  staff: state.staffs.staff
});

const mapDispatchToProps = {
  getStaff
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Staffs);
