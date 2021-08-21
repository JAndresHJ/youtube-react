import React from 'react';
import { render, screen } from '@testing-library/react';
import MobileMenuItems from '../MobileMenuItems';
import '@testing-library/jest-dom/extend-expect';

describe('MobileMenuItems component', () => {
  it('should display the profile option', () => {
    render(<MobileMenuItems open />);

    const profileOption = screen.getByText('Profile');
    const profileIconButton = screen.getByRole('button');
    screen.debug(profileIconButton);

    expect(profileOption).toBeInTheDocument();
    expect(profileIconButton).toBeInTheDocument();
  });
});
