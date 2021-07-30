import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header component', () => {
  it('displays the title of the video', () => {
    render(<Header />);

    const darkModeElement = screen.getByText('Login');

    expect(darkModeElement).toBeInTheDocument();
  });

  it('tests the state change', () => {
    const { getByLabelText } = render(<Header />);
    const switchElement = getByLabelText('Dark mode');

    fireEvent.click(switchElement);

    expect(switchElement).toHaveProperty('checked', true);
  });

  it('tests the state change', () => {
    const { getByLabelText } = render(<Header />);
    const switchElement = getByLabelText('Dark mode');

    expect(switchElement).toHaveProperty('checked', false);
  });
});
