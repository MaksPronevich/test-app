import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { AiFillDelete } from 'react-icons/ai';

export const TasksItem = ({ _id, title, description, deadline, isCompleted, toggleCompleted, removeTask }) => {
	return (
		<li className={`${isCompleted ? 'bg-green-300' : ''} mb-4 flex items-center justify-between gap-5 rounded-xl px-8 py-5 shadow-md`}>
			<button type='button' onClick={() => toggleCompleted(_id)}>
				{isCompleted ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
			</button>
			<div className='flex-1'>
				<h3 className='mb-2 text-2xl font-bold'>{title}</h3>
				<p className='mb-4 text-gray-600'>{description}</p>
				<span className='rounded bg-rose-400 px-2 py-1'>{deadline}</span>
			</div>
			<button type='button' onClick={() => removeTask(_id)}>
				<AiFillDelete size={25} />
			</button>
		</li>
	);
};
