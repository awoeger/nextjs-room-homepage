import { css } from '@emotion/react';
import Link from 'next/link';
import { darkGray } from '../styles/styles';

const navbar = css`
  width: 100%;
  height: 65px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    padding: 10px;
  }

  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: ${darkGray};
    padding: 0 10px;
    font-weight: 600;
    font-size: 0.8em;
  }
`;

export default function Header() {
  return (
    <nav css={navbar}>
      <div>
        <p>room</p>
      </div>
      <ul>
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
    </nav>
  );
}
