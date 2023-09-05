import { useAccount, useContractRead } from 'wagmi';
import { useState, useEffect } from 'react';
import { Header, Form, TasksList } from './components';
import contractABI from '../data.json';

export const App = () => {
	const { isConnected } = useAccount();
	const [connectionStat, setConnectionStat] = useState();
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		setConnectionStat(isConnected);
	}, [isConnected]);

	const { data: tasksContract, isFetched } = useContractRead({
		address: '0xE76462D4C20786fb9F63d66deC612599A0477325',
		abi: contractABI,
		functionName: 'getTasks',
		onSuccess(data) {
			console.log('Success getTasks', data);
		},
		onError(error) {
			console.log('Error getTasks', error);
		},
	});

	useEffect(() => {
		setTasks(tasksContract);
	}, [tasksContract]);

	return (
		<>
			<Header />
			{connectionStat && (
				<main className='mt-6'>
					<div className='container mx-auto p-4'>
						<div className='flex justify-between gap-14'>
							<div className='max-w-xs flex-auto'>
								<h3 className='mb-5 text-3xl font-bold'>Create task</h3>
								<Form contractABI={contractABI} />
							</div>
							<TasksList tasks={tasks} isFetched={isFetched} contractABI={contractABI} />
						</div>
					</div>
				</main>
			)}
		</>
	);
};
