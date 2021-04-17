import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
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
