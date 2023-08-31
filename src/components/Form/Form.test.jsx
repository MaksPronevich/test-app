import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Form } from './Form';

describe('Form component', () => {
	it('Form renders', () => {
		render(<Form />);
	});
});
