import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  // Acessa os elementos da tela
  render(<App />);
  const inputEmail = screen.getByLabelText('Email'); // captura o elemento pelo texto da label

  // Faz os testes (ver quais casos de uso vamos querer testar)
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

// Encontra um único botão com o tipo button
// test('Verificando se existe um botão', () => {
//   // Acessa os elementos da tela
//   render(<App />);
//   const btn = screen.getByRole('button'); // captura o elemento por seu papel, dado pelo próprio atributo ou pelo type

//   // Faz os testes (ver quais casos de uso vamos querer testar)
//   expect(btn).toBeInTheDocument();
// });

// encontra na aplocação todos os botões que tenham o tipo button
test('Verificando se existe dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');

  expect(buttons).toHaveLength(2);
});

test('Verificando se existe um botão de enviar', () => {
  render(<App />);
  const btnSend = screen.getByTestId('id-send');

  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button');
  expect(btnSend).toHaveTextContent('Enviar'); // Ve se o botão possui dentro dele o texto necessário
});

test('Verifica se o texto "Valor:" existe na tela', () => {
  render(<App />);
  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');
})

test('Verificando se o botão e o campo email estão funcionando.', () => {

  // Acessa os elementos da tela
  render(<App />);
  const EMAIL_USER = 'email@email.com';
  const textEmail = screen.getByTestId('id-email-user');
  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');

  // Interagir com esses elementos
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  // Faz os testes (ver quais casos de uso vamos querer testar)
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});