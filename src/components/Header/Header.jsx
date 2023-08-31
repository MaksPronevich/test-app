import tailwindLogo from '/logo-tailwind.svg';

export const Header = () => {
	return (
		<header className='bg-slate-800 p-4 shadow-md'>
			<div className='container mx-auto'>
				<a href='#' className='flex items-center gap-3'>
					<img src={tailwindLogo} className='h-8 w-8' alt='Logo' />
					<span className='text-lg text-white'>Crypto test app</span>
				</a>
			</div>
		</header>
	);
};
