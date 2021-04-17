import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header>
      <span>LearnStart</span>
      <nav>
        <ul>
          <li>
            <Link to='/'>Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
