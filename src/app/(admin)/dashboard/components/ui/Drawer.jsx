import { Drawer as AntDrawer } from "antd";
const Drawer = ({
  width = "80%",
  title,
  children,
  open,
  onClose,
  placement = "right",
  ...rest
}) => {
  return (
    <>
      <AntDrawer
        width={width}
        title={title}
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
        placement={placement}
        {...rest}
      >
        {children}
      </AntDrawer>
    </>
  );
};
export default Drawer;
