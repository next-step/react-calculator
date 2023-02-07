import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CalculatorProvider from './store/CalculatorContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<CalculatorProvider>
			<App/>
		</CalculatorProvider>
	</React.StrictMode>,
);
