import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Header component', () => {
	it('Header renders', () => {
		render(<Header />);
	});
});
