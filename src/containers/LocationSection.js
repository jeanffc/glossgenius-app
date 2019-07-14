import { connect } from "react-redux";
import LocationView from "../components/LocationView";

const mapStateToProps = state => ({
    error: state.candidates.error,
    candidates: state.candidates.candidates,
    pending: state.candidates.pending
});

export default connect(
  mapStateToProps,
  null
)(LocationView);
