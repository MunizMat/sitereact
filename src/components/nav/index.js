import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export function MyNav() {
  return (
    <Nav>
      <Link to="/">Home</Link>
    </Nav>
  );
}