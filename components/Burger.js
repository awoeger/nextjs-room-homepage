import { css } from '@emotion/react';
import { darkGray } from '../styles/styles';

const burgerStyle = (open) => css`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: space-around;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${open ? darkGray : 'white'};
    border-radius: 12px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-of-type(1) {
      transform: ${open ? 'rotate(45deg)' : 'rotate(0deg)'};
    }
    &:nth-of-type(2) {
      transform: ${open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${open ? 0 : 1};
    }
    &:nth-of-type(3) {
      transform: ${open ? 'rotate(-45deg)' : 'rotate(0deg)'};
    }
  }

  @media (min-width: 830px) {
    div {
      display: none;
    }
  }
`;

function Burger(props) {
  return (
    <div
      css={burgerStyle(props.open)}
      onClick={() => props.setOpen(!props.open)}
      onKeyDown={() => props.setOpen(!props.open)}
      role="button"
      tabIndex={0}
    >
      <div />
      <div />
      <div />
    </div>
  );
}

export default Burger;
