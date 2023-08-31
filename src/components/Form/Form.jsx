import { useState } from 'react';

export const Form = ({ onAdd }) => {
	const [taskTitle, setTaskTitle] = useState('');
	const [taskDescription, setTaskDescription] = useState('');
	const [taskDeadline, setTaskDeadline] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		onAdd(taskTitle, taskDescription, taskDeadline);

		setTaskTitle('');
		setTaskDescription('');
		setTaskDeadline('');
	};

	return (
		<form className='rounded-lg border bg-slate-800 px-8 pb-10 pt-12 shadow-md' onSubmit={handleSubmit}>
			<input
				type='text'
				value={taskTitle}
				onChange={e => setTaskTitle(e.target.value)}
				className='mb-4 block w-full rounded-md border border-gray-600 px-4 py-1.5'
				placeholder='Input task title'
				required
			/>
			<textarea
				value={taskDescription}
				onChange={e => setTaskDescription(e.target.value)}
				className='mb-4 block w-full rounded-md border border-gray-600 px-4 py-1.5'
				placeholder='Input task description'
				required
			></textarea>
			<input
				type='datetime-local'
				value={taskDeadline}
				onChange={e => setTaskDeadline(e.target.value)}
				className='mb-6 block w-full rounded-md border border-gray-600 px-4 py-1.5'
				required
			/>
			<button type='submit' className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-white shadow-sm hover:bg-indigo-500'>
				Add task
			</button>
		</form>
	);
};
