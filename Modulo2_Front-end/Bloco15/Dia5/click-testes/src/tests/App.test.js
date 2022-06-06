import { cleanup, screen } from '@testing-library/react';
import App from '../App';
import renderWithRedux from './renderWithRedux'
import userEvent from '@testing-library/user-event'

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  
  test('a click in a button should increment the value of clicks', () => {
  renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

  expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('clicking in the button "Clique aqui" add an click', () => {
    renderWithRedux(<App />);
    const buttonClick = screen.getByRole('button');
    const doneClicks = screen.getByText('0');

    expect(doneClicks.innerHTML).toEqual('0');

    userEvent.click(buttonClick)

    const doneClicks2 = screen.getByText('1');
    expect(doneClicks2).toBeInTheDocument();
    expect(doneClicks2.innerHTML).toEqual('1');
  });

  test('clicking in the button "Clique aqui" add an click if many clicks have already been made', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const buttonClick = screen.getByRole('button');
    const doneClicks = screen.getByText('10');

    expect(doneClicks.innerHTML).toEqual('10');

    userEvent.click(buttonClick)

    const doneClicks2 = screen.getByText('11');
    expect(doneClicks2).toBeInTheDocument();
    expect(doneClicks2.innerHTML).toEqual('11');
  })
});


