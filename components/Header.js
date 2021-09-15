import { css } from '@emotion/react';
import { useState } from 'react';
import Burger from './Burger';
import RightNav from './RightNav';

const navbar = (open) => css`
  width: 100%;
  height: 65px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 100;
  background: ${open ? 'white' : 'none'};

  p {
    padding: 10px;
    color: white;
    display: ${open ? 'none' : 'flex'};
  }

  @media (min-width: 830px) {
    justify-content: flex-start;
    align-content: center;

    p {
      font-size: 1.5em;
    }
  }
`;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav css={navbar(open)}>
      <div>
        <p>room</p>
      </div>
      <Burger open={open} setOpen={setOpen} />
      <RightNav open={open} setOpen={setOpen} />
    </nav>
  );
}
