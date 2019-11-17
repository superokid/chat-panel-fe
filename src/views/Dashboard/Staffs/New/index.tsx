import { connect } from 'react-redux';
import { getStaffs, postStaff } from 'store/staffs/action';
import { AppState } from 'store/root-reducer';
import StaffNew from './StaffNew';

const mapStateToProps = (state: AppState) => ({
  staffs: state.staffs.staffs
});

const mapDispatchToProps = {
  getStaffs,
  postStaff
};

export default connect(mapStateToProps, mapDispatchToProps)(StaffNew);
