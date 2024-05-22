import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pagination from './index';

const mockOnPageChange = jest.fn();

const defaultProps = {
  totalItems: 50,
  itemsPerPage: 10,
  currentPage: 1,
  onPageChange: mockOnPageChange,
};

describe('Pagination Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders pagination component', () => {
    render(<Pagination {...defaultProps} />);
    const paginationElements = screen.getAllByRole('navigation');
    expect(paginationElements.length).toBeGreaterThan(0);
    paginationElements.forEach((pagination) => {
      expect(pagination).toBeInTheDocument();
    });
  });

  test('renders correct number of pages', () => {
    render(<Pagination {...defaultProps} />);
    const pageLinks = screen.getAllByRole('button');
    expect(pageLinks).toHaveLength(6); // 5 pages + "Перейти" button
  });

  test('displays the correct current page', () => {
    render(<Pagination {...defaultProps} />);
    const activePage = screen.getByTestId('active-page');
    expect(activePage).toHaveClass('active');
  });

  test('calls onPageChange with correct page number when a page is clicked', () => {
    render(<Pagination {...defaultProps} />);
    const page2 = screen.getByText('2');
    fireEvent.click(page2);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  test('changes the page number input value', () => {
    render(<Pagination {...defaultProps} />);
    const input = screen.getByLabelText('Page number input');
    fireEvent.change(input, { target: { value: '3' } });
    expect(input).toHaveValue(3);
  });

  test('calls onPageChange with the correct page number when "Перейти" button is clicked', () => {
    render(<Pagination {...defaultProps} />);
    const input = screen.getByLabelText('Page number input');
    const goToButton = screen.getByText('Перейти');
    fireEvent.change(input, { target: { value: '3' } });
    fireEvent.click(goToButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  test('does not call onPageChange if the input page number is invalid', () => {
    render(<Pagination {...defaultProps} />);
    const input = screen.getByLabelText('Page number input');
    const goToButton = screen.getByText('Перейти');
    fireEvent.change(input, { target: { value: '100' } });
    fireEvent.click(goToButton);
    expect(mockOnPageChange).not.toHaveBeenCalled();
  });
});
