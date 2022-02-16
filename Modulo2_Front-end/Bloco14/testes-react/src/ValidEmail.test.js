import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  // Acessa os elementos da tela
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);

  // Interagir com esses elementos
  const isValid = screen.getByText('Email Valido');

  // Faz os testes
  expect(isValid).toBeInTheDocument();
  expect(isValid).toHaveAttribute('class', 'green-text');
});

test('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } />);

    const isValid = screen.getByText('Email Inválido');

    expect(isValid).toBeInTheDocument();
    expect(isValid).toHaveAttribute('class', 'red-text');
  });

test('Testando um componente, caso o email seja uma string vazia.', () => {
    const EMAIL_USER = '';

    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByTestId("id-email-user")
    
    expect(isValid).toHaveTextContent('Valor:');
  });