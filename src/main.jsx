import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { goerli } from '@wagmi/core/chains';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

const chains = [goerli];
const projectId = 'a7da2b60b5e3a7cc61a6a1cd34fd1643';
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

const config = createConfig({
	autoConnect: true,
	connectors: w3mConnectors({ projectId, version: 1, chains }),
	publicClient,
});

const ethereumClient = new EthereumClient(config, chains);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<WagmiConfig config={config}>
			<App />
		</WagmiConfig>
		<Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
	</React.StrictMode>
);
