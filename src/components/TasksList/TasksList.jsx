import { TasksItem } from '../TasksItem/TasksItem';

export const TasksList = ({ isFetched, tasks = [], toggleCompleted, contractABI }) => {
	return (
		<ul className='max-w-2xl flex-auto'>
			{isFetched &&
				tasks.map(task => (
					<TasksItem key={task.id} {...task} toggleCompleted={toggleCompleted} contractABI={contractABI} />
				))}
		</ul>
	);
};
