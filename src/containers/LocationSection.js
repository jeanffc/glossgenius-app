import { connect } from "react-redux";
import LocationView from "../components/LocationView";

const mapStateToProps = state => ({
    pending: state.candidates.pending,
    error: state.candidates.error,
    location: state.candidates
});

export default connect(
  mapStateToProps,
  null
)(LocationView);
