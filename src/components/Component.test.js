import { render, screen } from '@testing-library/react';
import Header from './Header/Header';

test('Should render same text passed into title prop ', () => {
    render(<Header title="Manoj" />);
    const linkElement = screen.getByText(/Manoj/i);
    expect(linkElement).toBeInTheDocument();
});