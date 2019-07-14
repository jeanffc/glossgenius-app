import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CandidateActions from "../store/actions/candidates";
import CandidateList from "../components/CandidateList";

const mapStateToProps = state => ({
  error: state.candidates.error,
  candidates: state.candidates.candidates,
  pending: state.candidates.pending
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CandidateActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateList);
