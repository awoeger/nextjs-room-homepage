import { css } from '@emotion/react';
import Link from 'next/link';
import { darkGray } from '../styles/styles';

const listContainer = (open) => css`
  display: flex;
  list-style-type: none;
  padding: 0;
  flex-flow: row nowrap;

  a {
    text-decoration: none;
    color: ${darkGray};
    padding: 0 10px;
    font-weight: 600;
    font-size: 0.8em;
  }

  @media (max-width: 768px) {
    display: ${open ? 'flex' : 'none'};
    /* position: fixed; */
    /* top: 0;
    right: 0; */
    /* width: 100vw;
    height: 65px; */
  }
`;

export default function RightNav(props) {
  return (
    <ul css={listContainer(props.open)}>
      <li>
        <Link href="/">
          <a>home</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>shop</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>about</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>contact</a>
        </Link>
      </li>
    </ul>
  );
}
