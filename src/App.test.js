import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('App renders component with buttons', () => {
  render(<App />);
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Most Recent')).toBeInTheDocument();
  expect(screen.getByText('Type')).toBeInTheDocument();
});

test('renders files and folders', () => {
  render(<App />);
  expect(screen.getByText('Employee Handbook')).toBeInTheDocument();
  expect(screen.getByText('Expenses')).toBeInTheDocument();
});

test('button click changes sorting criteria and updates button styling', () => {
  render(<App />);
  const recentButton = screen.getByText('Most Recent');
  const nameButton = screen.getByText('Name');

  fireEvent.click(recentButton);

  expect(recentButton).toHaveStyle('background-color: #91a7c9');
  expect(nameButton).not.toHaveStyle('background-color: #91a7c9');
});

test('files are rendered in the correct order when sorted by name', () => {
  render(<App />);
  const nameButton = screen.getByText('Name');
  fireEvent.click(nameButton);

  const fileCards = screen.getAllByTestId('file-card-name');

  expect(fileCards[0]).toHaveTextContent('Cost centres');
  expect(fileCards[1]).toHaveTextContent('Employee Handbook');
  expect(fileCards[2]).toHaveTextContent('Public Holiday policy');

});