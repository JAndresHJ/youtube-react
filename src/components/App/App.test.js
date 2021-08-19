import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

beforeEach(() => {
  render(<App />);
});

describe('Header component', () => {
  it('should display the login option', () => {
    const darkModeElement = screen.getByText('Login');

    expect(darkModeElement).toBeInTheDocument();
  });

  it('should display the theme switch', () => {
    const switchElement = screen.getByLabelText('Dark mode');

    expect(switchElement).toBeInTheDocument();
  });

  it('should display the welcome title', () => {
    const welcomeText = screen.getByText('Welcome to the Challenge!');

    expect(welcomeText).toBeInTheDocument();
  });

  it('should display the search input', () => {
    const searchInput = screen.getByLabelText('search');

    expect(searchInput).toBeInTheDocument();
  });

  it('should display the menu icon', () => {
    const menuIcon = screen.getByTestId('menu-icon');

    expect(menuIcon).toBeInTheDocument();
  });
});
