import React from 'react';
import { render } from 'react-testing-library';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders welcome message', () => {
    const { getByText } = render(<App />);
    expect(getByText('SHOPMATE')).toBeInTheDocument();
});