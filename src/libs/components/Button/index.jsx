import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Button = ({ theme, text, type, onClick, maxW, size }) => {
  return (
    <StyledButton
      theme={theme}
      onClick={onClick}
      type={type}
      maxW={maxW}
      size={size}
    >
      {text}
    </StyledButton>
  );
};

const handleColorType = (theme) => {
  switch (theme) {
    case "primary":
      return "color: var(--white); background: var(--main-purple); &:hover {background: var(--main-purple-hover)};";
    case "secondary":
      return "color: var(--main-purple); background: var(--white-grey); &:hover {background: var(--purple-grey)};";
    case "destructive":
      return "color: var(--white); background: var(--red); &:hover {background: var(--red-hover)};";
  }
};

const handleSizeType = (size) => {
  switch (size) {
    case "xl":
      return "padding: 15px 0 14px 0; border-radius: 24px;";

    default:
      return "padding: 8px 0 9px 0; border-radius: 2rem;";
  }
};

const StyledButton = styled.button`
  width: 100%;
  max-width: ${({ maxW }) => `${maxW}px`};
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.9rem;
  padding: 0.9rem;
  border: none;
  cursor: pointer;
  ${({ theme }) => handleColorType(theme)};
  ${({ size }) => handleSizeType(size)};
`;

Button.propTypes = {
  theme: PropTypes.oneOf(["primary", "secondary", "destructive"]).isRequired,
  size: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  onClick: PropTypes.func,
  maxW: PropTypes.number,
};
