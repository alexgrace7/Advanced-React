import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/items">
      <a>Shop</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
    <Link href="/me">
      <a>Account</a>
    </Link>
  </NavStyles>
);

export default Nav;