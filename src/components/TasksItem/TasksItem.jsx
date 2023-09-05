import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { AiFillDelete } from 'react-icons/ai';
import { usePrepareContractWrite, useContractWrite } from 'wagmi';

export const TasksItem = ({ id, title, description, deadline, isCompleted, contractABI }) => {
	const { config: configForRemove } = usePrepareContractWrite({
		address: '0xE76462D4C20786fb9F63d66deC612599A0477325',
		abi: contractABI,
		functionName: 'deleteTask',
		args: [id],
	});

	const { config: configForDone } = usePrepareContractWrite({
		address: '0xE76462D4C20786fb9F63d66deC612599A0477325',
		abi: contractABI,
		functionName: 'toogleCompleted',
		args: [id],
	});

	const { write: removeTask } = useContractWrite(configForRemove);
	const { write: doneTask } = useContractWrite(configForDone);

	return (
		<li
			className={`${
				isCompleted ? 'bg-green-300' : ''
			} mb-4 flex items-center justify-between gap-5 rounded-xl px-8 py-5 shadow-md`}
		>
			<button type='button' onClick={() => doneTask?.()}>
				{isCompleted ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
			</button>
			<div className='flex-1'>
				<h3 className='mb-2 text-2xl font-bold'>{title}</h3>
				<p className='mb-4 text-gray-600'>{description}</p>
				<span className='rounded bg-rose-400 px-2 py-1'>{deadline}</span>
			</div>
			<button type='button' onClick={() => removeTask?.()}>
				<AiFillDelete size={25} />
			</button>
		</li>
	);
};
