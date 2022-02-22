import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';

describe('teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
      level: 1,
    });
    expect(homeTitle).toBeInTheDocument();
  });

  it('deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();

    userEvent.click(aboutLink);

    const { pathname } = history.location; // caminho na url de onde vc está.
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    // No caso como o sobre tem um link até ele e dentro dele, ou seja, estamos trabalhando com o browser router, temos que usar a render with router

    const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/'); //O push envia uma pessoa diretamente para uma rota determinada.

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  });
});

it('deve renderizar o componente About (apenas componente)', () => {
  renderWithRouter(<About />);

  const aboutTitle = screen.getByRole('heading',
    { name: 'Você está na página Sobre' });
  expect(aboutTitle).toBeInTheDocument();
});