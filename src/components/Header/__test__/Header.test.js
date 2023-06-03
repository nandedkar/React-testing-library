import { render, screen } from '@testing-library/react';
import Header from '../Header';



test('render learn react link', async () => {
    render(<Header title="Todo" />);
    const headerElement = screen.getByText(/Todo/i);
    expect(headerElement).toBeInTheDocument();
})


it('Should render same text passed into title prop', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByRole("heading", { name: "My Header" });
    expect(headingElement).toBeInTheDocument();
})


it('Should render same text passed into title prop', () => {
    render(<Header title="My Headers" />);
    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
})