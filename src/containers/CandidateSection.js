import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CandidateActions from "../store/ducks/candidates";
import * as DialogActions from "../store/ducks/dialog";
import CandidateList from "../components/CandidateList";

const mapStateToProps = state => ({
  error: state.candidates.error,
  candidates: state.candidates.candidates,
  pending: state.candidates.pending
});

const mapDispatchToProps = dispatch => ({
  candidateActions: bindActionCreators(CandidateActions, dispatch),
  dialogActions: bindActionCreators(DialogActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateList);
