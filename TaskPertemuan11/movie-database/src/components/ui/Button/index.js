// import styled
import styled, { css } from "styled-components";

// const colors = {
//   primary: "#4361ee",
//   secondary: "#b5179e",
//   // info, warningm danger, gray, black, white
//   info: "green",
// };

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #4361ee;
  color: #fff;
  cursor: pointer;

  /**
  * Menangkap props variant
  * Props diakses melalui function
  */

  // PROPS VARIANT
  background-color: ${({variant, theme}) =>
    theme.colors[variant] || theme.colors["primary"]};

  // PROPS FULL
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
      size: 100%;
      margin: 0 auto;
    `}
`;

export default Button;
