import { TasksItem } from '../TasksItem/TasksItem';

export const TasksList = ({ tasks = [], toggleCompleted, removeTask }) => {
	return (
		<ul className='max-w-2xl flex-auto'>
			{Array.isArray(tasks)
				? tasks.map(task => <TasksItem key={task._id} {...task} toggleCompleted={toggleCompleted} removeTask={removeTask} />)
				: null}
		</ul>
	);
};
