import { Card as AntCard } from "antd";
import React from "react";

const Card = ({
  title = "",
  children,
  extra = "",
  variant = "outlined",
  className = "",
  ...rest
}) => {
  return (
    <AntCard
      title={title}
      extra={extra}
      className={`!shadow ${className}`}
      variant={variant}
      {...rest}
    >
      {children}
    </AntCard>
  );
};

export default Card;
