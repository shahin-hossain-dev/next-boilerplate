import { Modal as AntModal } from "antd";
import Button from "./Button";

const Modal = ({ title, open, onOk, onCancel, children, ...rest }) => {
  return (
    <>
      <AntModal
        title={title}
        closable={{ "aria-label": "Custom Close Button" }}
        open={open}
        footer={
          <Button onClick={onCancel} type="primary">
            Close
          </Button>
        }
        onCancel={onCancel}
        {...rest}
      >
        {children}
      </AntModal>
    </>
  );
};

export default Modal;
