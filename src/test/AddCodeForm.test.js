import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the testing library matchers
import AddCodeForm from '../components/AddCodeForm';
import { MemoryRouter } from 'react-router-dom';

describe('AddCodeForm', () => {
  it('should render the form correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <AddCodeForm />
      </MemoryRouter>
    );

    // Check if the form elements are rendered
    expect(getByText('Add 2FA Code')).toBeInTheDocument();
    expect(getByPlaceholderText('Code name')).toBeInTheDocument();
    expect(getByText('Add')).toBeInTheDocument();
  });

  it('should update the input field value', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <AddCodeForm />
      </MemoryRouter>
    );

    const input = getByPlaceholderText('Code name');
    fireEvent.change(input, { target: { value: 'New Code' } });

    // Check if the input field value is updated
    expect(input).toHaveValue('New Code');
  });

  it('should call the `onAddCode` function when the Add button is clicked', () => {
    const onAddCode = jest.fn(); // Mock the onAddCode function

    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <AddCodeForm onAddCode={onAddCode} />
      </MemoryRouter>
    );

    const input = getByPlaceholderText('Code name');
    const addButton = getByText('Add');

    fireEvent.change(input, { target: { value: 'New Code' } });
    fireEvent.click(addButton);

    // Check if the onAddCode function is called with the correct value
    expect(onAddCode).toHaveBeenCalledWith('New Code');
  });
});
