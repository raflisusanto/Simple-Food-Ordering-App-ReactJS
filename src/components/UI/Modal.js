import { Fragment } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = props => {
    const portalSelector = document.getElementById('overlays');

    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalSelector)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalSelector)}
    </Fragment>
}

export default Modal;