/* eslint-disable react/forbid-prop-types */
import * as React from "react";
import { Button } from "antd";
import * as PropTypes from "prop-types";

import getIcon from "../DTIcon";

/**
- Description here
*/

const DTButton = ({
  label,
  type,
  size,
  htmlType,
  icon,
  className,
  style,
  loading,
  ghost,
  disabled,
  danger,
  onClick,
  shape,
}) => (
  <Button
    type={type}
    size={size}
    htmlType={htmlType}
    icon={icon && getIcon(icon)}
    className={className}
    style={style}
    loading={loading}
    ghost={ghost}
    disabled={disabled}
    danger={danger}
    onClick={onClick}
    shape={shape}
  >
    {label && <span>{label}</span>}
  </Button>
);

DTButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf([
    "primary",
    "ghost",
    "dashed",
    "link",
    "default",
    "danger",
  ]),
  size: PropTypes.oneOf(["small", "middle", "large"]),
  htmlType: PropTypes.string,
  icon: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  loading: PropTypes.bool,
  ghost: PropTypes.bool,
  disabled: PropTypes.bool,
  danger: PropTypes.bool,
  onClick: PropTypes.func,
  shape: PropTypes.string,
};

DTButton.defaultProps = {
  label: undefined,
  type: "primary",
  size: "middle",
  htmlType: "button",
  icon: undefined,
  className: undefined,
  style: {},
  loading: false,
  ghost: false,
  danger: false,
  disabled: false,
  onClick: () => {},
  shape: undefined,
};

export default DTButton;
