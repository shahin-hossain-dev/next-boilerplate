import { Button as AntButton } from "antd";
const Button = ({
  children,
  type = "primary",
  size = "middle",
  icon,
  className = "!font-semibold hover:!bg-white hover:!border-black hover:!border hover:!text-black",
  onClick,
  onSubmit,
  ...props
}) => {
  return (
    <AntButton
      type={type}
      size={size}
      icon={icon}
      className={className}
      onClick={onClick}
      onSubmit={onSubmit}
      {...props}
    >
      {children}
    </AntButton>
  );
};

export default Button;
