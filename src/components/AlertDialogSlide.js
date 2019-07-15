import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import * as DialogDuckActions from "../store/ducks/dialog";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide(props) {
  // const [open, setOpen] = React.useState(false);

  const { open, text } = props;
  const { hideDialog } = props.dialogActions;

  // function handleClickOpen() {
  //   // setOpen(true);
  //   showDialog("test");
  // }

  function handleClose() {
    // setOpen(false);
    hideDialog();
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{text}</DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Yes
          </Button>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = state => ({
  open: state.dialog.open,
  text: state.dialog.text
});

const mapDispatchToProps = dispatch => ({
  dialogActions: bindActionCreators(DialogDuckActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertDialogSlide);
