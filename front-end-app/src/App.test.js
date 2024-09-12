import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import * as memdb from './memdb';
import '@testing-library/jest-dom'

jest.mock('./memdb', () => ({
  getAll: jest.fn(),
  deleteById: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
}));

describe('App Component', () => {
  beforeEach(() => {
    memdb.getAll.mockReturnValue([
      { id: 1, name: 'John Doe', email: 'john@example.com', password: '12345' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com', password: '54321' },
    ]);
  });

  it('renders CustomerList and CustomerAddUpdateForm', () => {
    render(<App />);
    
    // Check if Customer List table header is present
    expect(screen.getByText('Customer List')).toBeInTheDocument();
    
    // Check if the "Add" form is displayed by default
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('handles row click and displays customer data', () => {
    render(<App />);
    
    // Simulate a row click to select a customer
    const row = screen.getByText('John Doe');
    fireEvent.click(row);
    
    // Check if the form is now in "Update" mode and customer data is filled in the form
    expect(screen.getByText('Update')).toBeInTheDocument();
    expect(screen.getByDisplayValue('John Doe')).toBeInTheDocument();
    expect(screen.getByDisplayValue('john@example.com')).toBeInTheDocument();
  });

  it('handles saving a new customer', () => {
    render(<App />);
    
    // Check if the form is in "Add" mode initially
    expect(screen.getByText('Add')).toBeInTheDocument();

    // Fill in the form fields
    fireEvent.change(screen.getByPlaceholderText('Customer Name'), {
      target: { value: 'New Customer' },
    });
    fireEvent.change(screen.getByPlaceholderText('Customer email'), {
      target: { value: 'new@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Customer password'), {
      target: { value: 'password' },
    });

    // Click the save button
    fireEvent.click(screen.getByText('Save'));

    // Check if the post function is called
    expect(memdb.post).toHaveBeenCalledWith({
      name: 'New Customer',
      email: 'new@example.com',
      password: 'password',
    });
  });

  it('handles deleting a customer', () => {
    render(<App />);
    
    // Select a row
    const row = screen.getByText('John Doe');
    fireEvent.click(row);
    
    // Click the delete button
    fireEvent.click(screen.getByText('Delete'));
    
    // Check if deleteById was called with the correct ID
    expect(memdb.deleteById).toHaveBeenCalledWith(1);
  });
});
