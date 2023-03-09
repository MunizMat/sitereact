import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export function MyNav() {

  const isLoggedIn = true;

  return (
    <Nav>
      <ul className='left-side'>
        {!isLoggedIn && <Link to="/">Home</Link>}
        {isLoggedIn && <Link to="/">Espaço do aluno</Link>}
        {isLoggedIn && <Link to="/">Provas</Link>}
        {isLoggedIn && <Link to="/selecionar">Realizar Avaliação</Link>}
      </ul>
      <ul className='right-side'>
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {isLoggedIn && <Link to="/">Perfil</Link>}
        {isLoggedIn && <Link to="/">Sair</Link>}
      </ul>
    </Nav>
  );
}