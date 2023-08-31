import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { TasksItem } from './TasksItem';

describe('TasksItem component', () => {
	it('TasksItem renders', () => {
		render(<TasksItem />);
	});
});
