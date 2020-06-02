import React from 'react';

import { StyledButton } from './styles';

interface ButtonProps {
  link: string;
}

const Button: React.FC<ButtonProps> = ({ children, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <StyledButton type="button">{children}</StyledButton>
    </a>
  );
};

export default Button;
