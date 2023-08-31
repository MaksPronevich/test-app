import { useState } from 'react';
import { Header, Form, TasksList } from './components';

const dataDB = [
	{
		_id: '9094032910',
		title: 'Learn Solidity language and comlete test app',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt maxime laborum voluptatum molestias repellat minus magni, dignissimos officia error aliquid.',
		deadline: '2023-09-15 12:30',
		isCompleted: false,
	},
	{
		_id: '90940232910',
		title: 'Learn vite, complete test app',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorum assumenda iure consectetur quidem eum.',
		deadline: '2023-11-15 12:30',
		isCompleted: true,
	},
];

export const App = () => {
	const [tasks, setTasks] = useState(dataDB);

	const addTask = (title, description, deadline) => {
		const newTask = {
			_id: Math.random(),
			title,
			description,
			deadline: deadline.replace('T', ' '),
			isComleted: false,
		};

		setTasks(prev => [newTask, ...prev]);
	};

	const toggleCompleted = taskId => {
		const copyTasks = [...tasks];
		const currentTask = copyTasks.find(task => task._id === taskId);
		currentTask.isCompleted = !currentTask.isCompleted;
		setTasks(copyTasks);
	};

	const removeTask = taskId => {
		setTasks([...tasks].filter(task => task._id !== taskId));
	};

	return (
		<>
			<Header />
			<main className='mt-6'>
				<div className='container mx-auto p-4'>
					<div className='flex justify-between gap-14'>
						<div className='max-w-xs flex-auto'>
							<h3 className='mb-5 text-3xl font-bold'>Create task</h3>
							<Form onAdd={addTask} />
						</div>
						<TasksList tasks={tasks} toggleCompleted={toggleCompleted} removeTask={removeTask} />
					</div>
				</div>
			</main>
		</>
	);
};
