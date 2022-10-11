import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Chip } from './Chip';

const defaultProps = {
  onClick: jest.fn(),
  children: 'Chip',
};

describe('<Chip />', () => {
  it('should render', () => {
    render(<Chip {...defaultProps} />);

    expect(screen.getByTestId('Chip-comp')).toMatchSnapshot();
  });

  it('should call onClick', () => {
    render(<Chip {...defaultProps} />);
    fireEvent.click(screen.getByTestId('Chip-comp'));

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('should be disableable', () => {
    render(<Chip {...defaultProps} disabled />);

    expect(screen.getByTestId('Chip-comp')).toHaveProperty('disabled');
  });

  it('should render children', () => {
    render(<Chip {...defaultProps} disabled />);

    expect(screen.getByText(/Chip/i)).toBeInTheDocument();
  });

  it('should allow custom className', () => {
    const props = {
      ...defaultProps,
      className: 'Custom',
    };
    render(<Chip {...props} />);

    expect(screen.getByTestId('Chip-comp')).toHaveProperty('className');
  });
});
