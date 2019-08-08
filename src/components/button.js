import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const Button = ({
  buttonType = "button",
  variant = "default",
  children = null,
  ...rest
}) => {
  const ButtonStyled = styled[buttonType]`
    display: ${variant === "inline" ? "inline-block" : "block"};
    padding: 5px 30px;
    margin: 0;
    border-radius: 4px;
    background-color: ${variant === "header" ? "#424242" : "#713aa3"};
    color: #fff;
    cursor: pointer;
    margin-left: auto;
    border: none;
    text-decoration: none;
    line-height: 1.8;
    &[disabled] {
      background-color: #abafb3;
      color: #59525f;
    }
  `
  return <ButtonStyled {...rest}>{children}</ButtonStyled>
}

Button.propTypes = {
  buttonType: PropTypes.string,
  variant: PropTypes.string,
}

Button.defaultProps = {
  buttonType: "button",
  variant: "default",
}
export default Button
