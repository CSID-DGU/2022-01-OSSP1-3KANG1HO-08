import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Modal({ className, visible, children, width }) {
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper className={className} tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner" width={width}>
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: ${(props) => props.width};
  overflow: auto;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 20px 40px 40px;
  height: 600px;
`;

Modal.propTypes = {
  visible: PropTypes.bool,
};

export default Modal;
