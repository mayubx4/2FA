import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importing toHaveTextContent and toBeInTheDocument
import CodeStore from '../CodeStore';
import CodeList from '../components/CodeList';

// Mock the Draggable component
jest.mock('../components/Draggable.jsx', () => {
  return function MockDraggable(props) {
    return (
      <div>
        {/* You can render some placeholder content here */}
        <div data-testid="mock-draggable">{props.name}</div>
      </div>
    );
  };
});

describe('CodeList Component', () => {
  it('should render a list of Draggable components', () => {
    // Mock the codeStore's codes data
    CodeStore.codes = [
      { name: 'Code 1', code: '123456', timeRemaining: 60 },
      { name: 'Code 2', code: '789012', timeRemaining: 45 },
    ];

    render(<CodeList />);

    // Get all Draggable components rendered by CodeList
    const draggableComponents = screen.getAllByTestId('mock-draggable');

    // Assert that the correct number of Draggable components are rendered
    expect(draggableComponents.length).toBe(CodeStore.codes.length);

    // You can perform additional assertions on each Draggable component
    expect(screen.getByText('Code 1')).toBeInTheDocument();
    expect(screen.getByText('Code 2')).toBeInTheDocument();
  });
});
