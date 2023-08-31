import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { TasksList } from './TasksList';

const data = [
	{ _id: '9094032910', title: 'Task 1 title', description: 'Task 1 description', deadline: '2023-09-15 12:30', isCompleted: false },
	{ _id: '90940232910', title: 'Task 2 title', description: 'Task 2 description', deadline: '2023-11-15 12:30', isCompleted: false },
];

describe('TasksList component', () => {
	it('TasksList renders', () => {
		render(<TasksList tasks={data} />);
	});
});
